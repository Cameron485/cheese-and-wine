import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { navigate } from 'gatsby-link';

function encode(data) {
    return Object.keys(data)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&');
}

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isValidated: false };
    }

    isDisabled = () => {
        console.log(this.state);
        return Object.values(this.state).every((el) => el === undefined);
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...this.state,
            }),
        })
            .then(() => navigate(form.getAttribute('action')))
            .catch((error) => alert(error));
    };

    render() {
        const { drawful, quiplash } = this.state;
        return (
            <form
                name="contact"
                method="post"
                action="/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
            >
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                    <label htmlFor="bot-field">
                        Don’t fill this out:{' '}
                        <input name="bot-field" onChange={this.handleChange} />
                    </label>
                </div>
                <h2 className="has-text-weight-bold is-size-2">Examples</h2>
                <p>
                    <b>Drawful:</b> Flat earth, Trump injecting bleach, Hitler
                    cooking a sunday roast
                </p>
                <p>
                    <b>Quiplash:</b> Make _____ great again, I'd rather ____
                    than play Davie's quiz again, What's there a ton of in
                    heaven?
                </p>
                <div className="field">
                    <label className="label" htmlFor="name">
                        Enter a prompt for Drawful
                        <div className="control">
                            <textarea
                                className="textarea"
                                type="text"
                                name="drawful"
                                onChange={this.handleChange}
                                id="drawful"
                            />
                        </div>
                    </label>
                </div>
                <div className="field">
                    <label className="label" htmlFor="name">
                        Enter a prompt for Quiplash
                        <div className="control">
                            <textarea
                                className="textarea"
                                type="text"
                                name="quiplash"
                                onChange={this.handleChange}
                                id="quiplash"
                            />
                        </div>
                    </label>
                </div>
                <div className="field">
                    {!drawful && !quiplash ? (
                        <p className="has-text-centered">
                            <b>
                                Please fill in at least one of the above prompts
                            </b>
                        </p>
                    ) : (
                        <button
                            disabled={!drawful && !quiplash}
                            className="button is-link"
                            type="submit"
                        >
                            Send
                        </button>
                    )}
                </div>
            </form>
        );
    }
}
