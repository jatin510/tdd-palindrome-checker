import { PalindromeChecker } from './index';

describe('palindrome checker', () => {
  let palindromeChecker: PalindromeChecker;

  beforeEach(() => {
    palindromeChecker = new PalindromeChecker();
  });
  it('should be able to tell that "mom" is a palindrome', () => {
    expect(palindromeChecker.isAPalindrome('mom')).toBeTruthy();
  });

  it('should be able to tell that "bill" is not a palindrome', () => {
    expect(palindromeChecker.isAPalindrome('bill')).toBeFalsy();
  });

  it('should still detect a palindrome even if the casing is off', () => {
    expect(palindromeChecker.isAPalindrome('Mom')).toBeTruthy();
  });

  it('should be able to tell that "Was It A Rat I Saw" is a palindrome', () => {
    const str = 'Was It A Rat I Saw';
    expect(palindromeChecker.isAPalindrome(str)).toBeTruthy();
  });
});
