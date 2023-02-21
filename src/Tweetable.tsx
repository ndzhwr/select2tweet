import React from "react";


const Tweetable: React.FC<{ children: React.ReactNode }> = ({ children }: { children: React.ReactNode }) => {
    const [elt, setElt] = React.useState<HTMLButtonElement>()

    React.useEffect(() => {
        const elt = document.getElementById('btn') as HTMLButtonElement
        elt.style.display = "none"
        elt.style.opacity = "0%"
        setElt(elt)
    }, [])

    const handleMouseDown = (e: any) => {

        const text: string = document.getSelection()?.toString() as string
        if (text && text.length != 0) {
            elt!.style.display = "block"
            elt!.style.left = e.pageX - 140 + 'px';
            elt!.style.top = e.pageY - 110 + 'px';
            elt!.style.opacity = "100%"
        }
    }

    const handleMouseLeave = (e: any) => {
        elt!.style.display = "none"
    }
    const handleShareTweet = (slct: Selection) => {
        if (slct.rangeCount > 0) {
            const range = slct.getRangeAt(0);
            const container = document.createElement('div');
            container.appendChild(range.cloneContents());

            const anchorTags = container.querySelectorAll('a');
            anchorTags.forEach((anchor) => {
                anchor.outerHTML = anchor.innerHTML;
            });

            const innerHTML = container.outerHTML;
            console.log(innerHTML);
            const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(innerHTML)}`;
            window.open(twitterShareUrl, '_blank');
        }
    };
    return (
        <div className="App" style={{
            position: 'relative',
        }} onMouseUp={(e) => handleMouseDown(e)} onMouseLeave={handleMouseLeave}>

            {children}
            <button
                id='btn'
                style={{ position: 'absolute', zIndex: 10 }}
                onMouseOver={(e) => elt!.style.display = "block"}
                onClick={(e) => handleShareTweet(document.getSelection() as Selection)}>Share on twitter</button>
        </div>)
}

export default Tweetable