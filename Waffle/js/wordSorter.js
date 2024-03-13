/*
async function getWordFrequency(word) {
    const apiUrl = `https://api.datamuse.com/words?sp=${word}&md=f`;
    try {
        const response = await axios.get(apiUrl);
        const data = response.data;
        if (data.length > 0) {
            // Return the frequency of the first result
            return data[0].tags.find(tag => tag.startsWith('f:')).split(':')[1];
        } else {
            // Return null if no results are found
            return null;
        }
    } catch (error) {
        console.error('Error fetching word frequency:', error);
        throw error;
    }
}

async function sortWordsByFrequency(wordList) {
    const wordFrequencyPromises = wordList.map(async word => {
        const frequency = await getWordFrequency(word);
        return { word, frequency: parseInt(frequency, 10) || 0 };
    });

    const wordFrequencies = await Promise.all(wordFrequencyPromises);

    // Sort the words by frequency in descending order
    const sortedWords = wordFrequencies.sort((a, b) => b.frequency - a.frequency);

    // Extract only the words from the sorted list
    const sortedWordList = sortedWords.map(entry => entry.word);

    return sortedWordList;
}

// Example usage
const inputWords = localStorage.getItem("wordsJSON");
console.log("started");
sortWordsByFrequency(inputWords)
    .then(sortedWords => {
        console.log('Sorted Words by Frequency:', sortedWords);
    })
    .catch(error => {
        console.error('Error:', error);
    });
*/