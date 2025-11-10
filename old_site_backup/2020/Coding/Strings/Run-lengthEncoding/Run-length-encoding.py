# O(n) time | O(n) space
def caesarCipherEncryptor(string, key):
    newKey = key % 26
	result = []
	for char in string:
		ascii_ = ord(char) + newKey
		if ascii_ <= 122:
			result.append(chr(ascii_))
		else:
			result.append(chr(96 + ascii_ % 122))
	return "".join(result)


# O(n) time | O(n) space
#import string
def caesarCipherEncryptor(string, key):
    # string.ascii_lowercase
	# >> abcdefghijklmnopqrstuvwxyz
    fullChar = list("abcdefghijklmnopqrstuvwxyz")
	newKey = key % 26
	result = []
	for char in string:
		newLetterCode = fullChar.index(char) + newKey
		if newLetterCode <= 25:
			result.append(fullChar[newLetterCode])
		else:
			result.append(fullChar[newLetterCode % 26])
	return "".join(result)