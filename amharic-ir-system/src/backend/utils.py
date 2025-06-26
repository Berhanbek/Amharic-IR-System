def load_documents(documents_folder):
    """
    Loads all text documents from the specified folder and returns a list of document contents.
    """
    import os

    if not os.path.exists(documents_folder):
        raise FileNotFoundError(f"The folder '{documents_folder}' does not exist.")

    documents = []
    for file_name in os.listdir(documents_folder):
        if file_name.endswith('.txt'):
            with open(os.path.join(documents_folder, file_name), 'r', encoding='utf-8') as file:
                documents.append(file.read())
    
    return documents

def format_search_results(results):
    """
    Formats the search results for display.
    """
    formatted_results = []
    for result in results:
        formatted_results.append({
            'title': result['title'],
            'link': result['link'],
            'snippet': result['snippet']
        })
    return formatted_results

def save_search_history(query, results, history_file='search_history.txt'):
    """
    Saves the search query and results to a history file.
    """
    with open(history_file, 'a', encoding='utf-8') as file:
        file.write(f"Query: {query}\n")
        for result in results:
            file.write(f"Title: {result['title']}, Link: {result['link']}\n")
        file.write("\n")