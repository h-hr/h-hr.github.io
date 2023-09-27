function new_base(input, index, z) {
    function factorial(n) {
        return n <= 1n ? 1n : n * factorial(n - 1n);
    }

    function new_base_retrieve_index(input, value) {
        const inputLength = BigInt(input.length);
        const maxIndex = factorial(inputLength);

        let index = 0n;
        let remainingChars = input.split('');

        for (let i = inputLength - 1n; i >= 0n; i--) {
            const char = value[inputLength - 1n - i];
            const charIndex = remainingChars.indexOf(char);

            if (charIndex === -1) {
                throw new Error('Invalid value');
            }

            index += BigInt(charIndex) * factorial(i);
            remainingChars.splice(charIndex, 1);
        }

        index += 1n; // Adjust index to start from 1 externally

        if (index > maxIndex) {
            throw new Error('Value out of range');
        }

        return index;
    }

    const inputLength = BigInt(input.length);
    const maxIndex = factorial(inputLength);

    if (index === 'i') {
        return new_base_retrieve_index(input, z);
    } else if (index === 'l') {
        return maxIndex;
    } else {
        if (isNaN(index)) {
            throw new Error('Invalid index');
        }

        index = BigInt(index);

        if (index < 1n || index > maxIndex) {
            throw new Error('Index out of range');
        }

        index -= 1n; // Adjust index to start from 0 internally

        let remainingChars = input.split('');
        let combination = '';

        for (let i = inputLength - 1n; i > 0n; i--) {
            const charIndex = Number(index / factorial(i));
            combination += remainingChars[charIndex];
            remainingChars.splice(charIndex, 1);
            index %= factorial(i);
        }

        combination += remainingChars[0];
        return combination;
    }
}
