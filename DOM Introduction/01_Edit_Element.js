function edit(first, second, third) {
    while (first.textContent !== first.textContent.replace(second,third)){
        first.textContent = first.textContent.replace(second, third);
    }

}
