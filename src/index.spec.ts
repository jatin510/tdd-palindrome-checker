import { PalindromeChecker } from './index';

describe('palindrome checker', () => {
  it('should be able to tell that "mom" is a palindrome', () => {
    const palindromeChecker = new PalindromeChecker();
    expect(palindromeChecker.isAPalindrome('mom')).toBeTruthy();
  });

  it('should be able to tell that "bill" is not a palindrome', () => {
    const palindromeChecker = new PalindromeChecker();
    expect(palindromeChecker.isAPalindrome('bill')).toBeFalsy();
  });

  it('should still detect a palindrome even if the casing is off', () => {
    const palindromeChecker = new PalindromeChecker();
    expect(palindromeChecker.isAPalindrome('Mom')).toBeTruthy();
  });
});
