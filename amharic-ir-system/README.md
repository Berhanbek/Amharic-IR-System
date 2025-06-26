# Amharic Information Retrieval System

This project is an Information Retrieval (IR) system designed to support the Amharic language. It allows users to search for and retrieve document links based on their queries. The system is structured into a backend and a frontend, utilizing modern technologies for efficient document processing and user interaction.

## Project Structure

```
amharic-ir-system
├── src
│   ├── backend
│   │   ├── app.py                # Main entry point for the backend application
│   │   ├── ir_engine.py          # Core logic for the information retrieval system
│   │   ├── utils.py              # Utility functions for backend operations
│   │   └── amharic_preprocessing.py # Functions for preprocessing Amharic text
│   ├── frontend
│   │   ├── App.vue               # Root component of the Vue.js application
│   │   ├── main.js               # Entry point for the frontend application
│   │   ├── components
│   │   │   ├── SearchBar.vue     # Component for the search bar
│   │   │   └── ResultsList.vue    # Component for displaying search results
│   │   └── assets                 # Static assets for the frontend
│   └── data
│       └── documents
│           ├── sample1.txt       # Sample document for testing
│           └── sample2.txt       # Another sample document for testing
├── requirements.txt               # Python dependencies for the backend
├── package.json                   # Configuration file for npm
└── README.md                      # Documentation for the project
```

## Setup Instructions

### Backend

1. Navigate to the `src/backend` directory.
2. Install the required Python packages listed in `requirements.txt`:
   ```
   pip install -r requirements.txt
   ```
3. Run the backend application:
   ```
   python app.py
   ```

### Frontend

1. Navigate to the `src/frontend` directory.
2. Install the required npm packages:
   ```
   npm install
   ```
3. Start the frontend application:
   ```
   npm run serve
   ```

## Usage

- Open your web browser and go to `http://localhost:8080` (or the port specified by your frontend application).
- Use the search bar to input your queries in Amharic.
- The results will be displayed as a list of document links.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.