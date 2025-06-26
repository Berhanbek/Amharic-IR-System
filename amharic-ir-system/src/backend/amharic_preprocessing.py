import os
import re
import json

def normalize_text(text):
    """
    Normalizes Amharic text by converting it to lowercase and removing extra spaces.
    """
    text = text.lower()
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def tokenize_text(text):
    """
    Tokenizes Amharic text into words using whitespace and punctuation.
    """
    # Split on whitespace and remove punctuation
    tokens = re.findall(r'[\u1200-\u137F\w]+', text)
    return tokens

def load_stopwords(json_path):
    """
    Loads Amharic stopwords from a JSON file.
    """
    with open(json_path, 'r', encoding='utf-8') as f:
        stop_words = set(json.load(f))
    return stop_words

def remove_stopwords(tokens, stopword_json_path):
    """
    Removes stopwords from the tokenized Amharic text using a JSON stopword list.
    """
    stop_words = load_stopwords(stopword_json_path)
    return [word for word in tokens if word not in stop_words]

def preprocess_amharic_text(text, stopword_json_path):
    """
    Preprocesses Amharic text by tokenizing and removing stopwords.
    """
    tokens = tokenize_text(text)
    filtered_tokens = remove_stopwords(tokens, stopword_json_path)
    return filtered_tokens