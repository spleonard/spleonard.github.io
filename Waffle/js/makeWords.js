
function MakeAllFakeWords(qListGood, qListBad, qListYellow, floatingLetters) {
    var AllFakeWords = [[], [], [], [], [], []];
    // Assuming your local list is an array of words
    const acceptableWords = JSON.parse(localStorage.getItem("wordsJSON")) || [];
    for (let i = 0; i < 6; i++) {
        var tempWords = generateWordsForOneWord(floatingLetters, qListGood[i]);
        var tempQListBad = removeQuestionMarks(qListBad[i]);
        var tempQListYellowAll = remove135Entries(qListYellow[i]);
        var tempQListYellow = removeQuestionMarks(tempQListYellowAll);

        // Filter words based on the local list of acceptable words
        AllFakeWords[i] = tempWords.filter(word => acceptableWords.includes(word) && filterWords(word, qListGood[i], tempQListYellow, tempQListBad));
    }
    return AllFakeWords;
}

function removeQuestionMarks(list) {
    return list.filter(item => item !== '?');
}
function remove135Entries(neededLetters) {
    return neededLetters.filter((_, index) => index % 2 !== 0);
}

function generateWordsForOneWord(wordBank, wordPattern) {
    const allFakeWordsSet = new Set();

    function generateWordsHelper(currentWord, currentIndex, letterCounts) {
        // If we've reached the end of the pattern, add the current word to the set
        if (currentIndex === wordPattern.length) {
            allFakeWordsSet.add(currentWord.join(''));
            return;
        }

        const currentPatternChar = wordPattern[currentIndex];
        // If it's a wildcard, we can pick any letter from the wordBank
        const availableLetters = currentPatternChar === '?' ? wordBank : [currentPatternChar];

        for (const letter of availableLetters) {
            // Only proceed if we have the letter available in the letter counts
            if (letterCounts.get(letter) > 0 || currentPatternChar !== '?') {
                // Create a new map and decrement the letter count
                const newCounts = new Map(letterCounts);
                
                // Decrement the count only if this letter is used for the current wildcard
                if (currentPatternChar === '?') {
                    newCounts.set(letter, newCounts.get(letter) - 1);
                }

                // Continue with the recursion for the next position
                generateWordsHelper([...currentWord, letter], currentIndex + 1, newCounts);
            }
        }
    }

    // Count the occurrences of each letter in the word bank
    const letterCounts = new Map();
    for (const letter of wordBank) {
        letterCounts.set(letter, (letterCounts.get(letter) || 0) + 1);
    }

    // Start the recursive process
    generateWordsHelper([], 0, letterCounts);

    // Convert the Set back to an array to match your original return type
    return Array.from(allFakeWordsSet);
}

function filterWords(wordList, wordPattern, requiredLetters, forbiddenLetters) {
    wordListArray = [wordList[0], wordList[1], wordList[2], wordList[3], wordList[4]];
    return wordListArray.filter(word => {
        // Check if the word matches the pattern
        const matchesPattern = word.split('').every((letter, index) => {
            return wordPattern[index] === '?' || wordPattern[index] === letter;
        });

        // Check if the word contains all required letters
        const hasRequiredLetters = requiredLetters.every(letter => word.includes(letter));

        // Check if the word contains any forbidden letters
        const doesNotHaveForbiddenLetters = forbiddenLetters.every(forbiddenLetter => {
            // Check if the forbidden letter is in the word pattern
            return !wordPattern.includes(forbiddenLetter) || word.includes(forbiddenLetter);
        });

        // Keep the word if it meets the criteria
        return matchesPattern && hasRequiredLetters && doesNotHaveForbiddenLetters;
    });
}
