# Amharic Information Retrieval System

This project is an Amharic Information Retrieval (IR) system that indexes a corpus of Amharic text documents and allows you to search them using TF-IDF.

---

## Prerequisites

- **Python 3.8+** (recommended: Python 3.10)
- **pip** (Python package manager)
- **Git** (optional, for cloning the repository)

---

## Setup Instructions

### 1. Clone the Repository

```sh
git clone https://github.com/yourusername/Amharic_IR_System.git
cd Amharic_IR_System/amharic-ir-system/src/backend
```

Or download and extract the project ZIP, then navigate to `amharic-ir-system/src/backend`.

---

### 2. Create and Activate a Virtual Environment

```sh
python -m venv .venv
.venv\Scripts\activate
```

---

### 3. Install Dependencies

```sh
pip install -r requirements.txt
```

Make sure `requirements.txt` includes:
- `scikit-learn`
- `numpy`
- Any other required packages

---

### 4. Prepare the Corpus

- Place your Amharic `.txt` documents in the folder:  
  `amharic-ir-system/data/documents/corpus/`
- For testing or faster startup, you can create a folder like `amharic-ir-system/data/test_corpus/` and put only one `.txt` file inside.
- Make sure the path in `ir_engine.py` points to the correct folder:
  ```python
  DOCUMENTS_PATH = os.path.join(os.path.dirname(__file__), "../data/test_corpus")
  ```

---

### 5. Ensure Stopwords File Exists

- The file `amharic-stop-words.json` should be in the same directory as `ir_engine.py`.
- This file should contain a JSON array of Amharic stopwords.

---

### 6. Run the Backend

```sh
python app.py
```

- The backend will load the documents, preprocess them, and start the API (if implemented in `app.py`).

---

## Usage

- Use the API endpoints (see `app.py` for details) or interact with the system via the command line if provided.
- To search, send a query string to the appropriate endpoint or function.

---

## Troubleshooting

- **ModuleNotFoundError**: Ensure your virtual environment is activated and all dependencies are installed.
- **FileNotFoundError**: Check that your corpus and stopwords files are in the correct locations.
- **UnicodeDecodeError**: Ensure your `.txt` files are UTF-8 encoded.

---

## Project Structure

```
amharic-ir-system/
├── data/
│   ├── documents/
│   │   └── corpus/         # Place your .txt files here
│   └── test_corpus/        # (Optional) For quick testing
├── src/
│   └── backend/
│       ├── ir_engine.py
│       ├── app.py
│       └── amharic-stop-words.json
├── requirements.txt
└── README.md
```

---

## Contact

For questions or issues, please open an issue on the repository or contact the maintainer.