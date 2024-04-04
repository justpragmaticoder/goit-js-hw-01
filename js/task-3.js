function getElementWidth(content, padding, border) {
    const contentWidth = parseFloat(content);
    const totalPadding = parseFloat(padding) * 2;
    const totalBorder = parseFloat(border) * 2;

    return contentWidth + totalPadding + totalBorder;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200