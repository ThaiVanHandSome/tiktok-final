function SpliceTextToTag(text) {
    let tags = [];
    let tag = '';
    Array.from(text).forEach((c) => {
        if (c === '#') {
            tag = tag.trim();
            if (tag) {
                tags.push(tag);
            }
            tag = '#';
        } else {
            tag = tag + c;
        }
    });

    return tags;
}

export default SpliceTextToTag;
