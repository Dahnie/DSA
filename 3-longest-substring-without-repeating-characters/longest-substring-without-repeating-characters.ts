function lengthOfLongestSubstring(s: string): number {
    const charSet = new Set<string>();
    // let substring = "";
    
    let left = 0;
    let maxLength = 0;
    for(let right = 0; right < s.length; right++) {
        // While the duplicate is in charSet
        while(charSet.has(s[right])) {
        // Move the left pointer to the position of the new duplicate
        charSet.delete(s[left])
            left++;
        }
        // Update the set and the MaxLength
        // substring = s.slice(left, right + 1)
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1)
    }
    return maxLength;
};