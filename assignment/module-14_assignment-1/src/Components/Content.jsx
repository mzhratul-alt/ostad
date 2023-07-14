import { useState } from "react";

const Content = () => {
    const [text, setText] = useState('');

    const showText = (event) => {
        event.preventDefault();
        const formData = event.target.textBox.value;
        setText(formData);
        event.target.reset();
    };
    return (
        <section id="content_section">
            <form onSubmit={showText}>
                <textarea placeholder="Write Your Text" name="textBox"></textarea>
                <button type="submit">Submit</button>
            </form>
            <div className="result">{text}</div>
        </section>
    );
};

export default Content;
