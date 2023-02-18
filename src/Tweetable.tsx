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
        console.log(e.clientX, e.clientY)
        const text: string = document.getSelection()?.toString() as string
        if (text && text.length != 0) {
            console.log(text)
            elt!.style.display = "block"

            elt!.style.left = e.pageX - 100 + 'px';
            elt!.style.top = e.pageY - 110 + 'px';
            elt!.style.opacity = "100%"
        }
    }

    const handleMouseLeave = (e: any) => {
        elt!.style.display = "none"
    }
    const handleShareTweet = (text: string) => {
        const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
        window.open(twitterShareUrl, '_blank');
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
                onClick={(e) => handleShareTweet(document.getSelection()?.toString() as string)}>Share on twitter</button>
        </div>)
}

export default Tweetable