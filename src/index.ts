export class PalindromeChecker {
  isAPalindrome(str: string) {
    str = str.replace(/ /g, '');
    const reverse = str.split('').reverse().join('');
    return reverse.toLowerCase() === str.toLowerCase();
  }
}
