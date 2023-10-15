export function splitStringWithKeywords(inputString: string): Array<string> {
    // Use a regular expression to find substrings enclosed in square brackets with optional curly braces and content
    const pattern = /\[[^\]]+\](?:\{[^}]+\})?/g;
    
    // Find all matches in the input string
    const matches = inputString.match(pattern) || [];
    
    // Split the input string at the matched substrings
    const parts = inputString.split(pattern);
    
    // Combine the parts and matches into the final result
    const result = [];
    for (let i = 0; i < parts.length || i < matches.length; i++) {
      if (i < parts.length) {
        result.push(parts[i]);
      }
      if (i < matches.length) {
        result.push(matches[i]);
      }
    }
    
    return result.filter(Boolean); // Remove empty strings
  }

  export function parseTagString(tagString) {
    // Use a regular expression to match the tag and keyword
    const pattern = /\[([^\]]+)\]\{keyword:([^}]+)\}/;
    
    // Execute the regular expression on the input string
    const matches = pattern.exec(tagString);
    
    if (!matches) {
      // If no matches were found, return null or handle the error as needed
      return null;
    }
    
    // Extract the tag_text and keyword from the matched groups
    const tag_text = matches[1];
    const keyword = matches[2];
    
    return { tag_text, keyword };
  }
  