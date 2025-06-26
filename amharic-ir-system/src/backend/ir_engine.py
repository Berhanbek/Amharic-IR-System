import os
import json
from sklearn.feature_extraction.text import TfidfVectorizer
from amharic_preprocessing import normalize_text, tokenize_text, remove_stopwords, load_stopwords

STOPWORDS_PATH = os.path.join(os.path.dirname(__file__), "amharic-stop-words.json")
DOCUMENTS_PATH = os.path.join(os.path.dirname(__file__), "../data/documents")

class AmharicIRSystem:
    def __init__(self, documents_folder=DOCUMENTS_PATH, stopwords_path=STOPWORDS_PATH):
        self.documents_folder = documents_folder
        self.stopwords = load_stopwords(stopwords_path)
        self.documents = {}  # filename -> content
        self.doc_names = []  # list of filenames
        self.corpus = []     # list of preprocessed doc strings
        self.vectorizer = None
        self.tfidf_matrix = None
        self._load_and_prepare()

    def _preprocess(self, text):
        text = normalize_text(text)
        tokens = tokenize_text(text)
        tokens = [t for t in tokens if t not in self.stopwords]
        return " ".join(tokens)

    def _load_and_prepare(self):
        for filename in os.listdir(self.documents_folder):
            if filename.endswith('.txt'):
                with open(os.path.join(self.documents_folder, filename), 'r', encoding='utf-8') as f:
                    content = f.read()
                    self.documents[filename] = content
                    self.doc_names.append(filename)
                    self.corpus.append(self._preprocess(content))
        self.vectorizer = TfidfVectorizer()
        self.tfidf_matrix = self.vectorizer.fit_transform(self.corpus)

    def search(self, query):
        query_processed = self._preprocess(query)
        query_vec = self.vectorizer.transform([query_processed])
        scores = (self.tfidf_matrix * query_vec.T).toarray().flatten()
        ranked_indices = scores.argsort()[::-1]
        results = []
        for idx in ranked_indices:
            if scores[idx] > 0:
                fname = self.doc_names[idx]
                snippet = self.documents[fname][:120] + "..." if len(self.documents[fname]) > 120 else self.documents[fname]
                results.append({
                    "title": fname,
                    "snippet": snippet,
                    "link": f"/documents/{fname}",
                    "score": float(scores[idx])
                })
        return results

# For API integration
ir_system_instance = AmharicIRSystem()

def search_documents(query, _=None):
    return ir_system_instance.search(query)