export class PalindromeChecker {
  isAPalindrome(str: string) {
    const reverse = str.split('').reverse().join('');
    return reverse.toLowerCase() === str.toLowerCase();
  }
}
