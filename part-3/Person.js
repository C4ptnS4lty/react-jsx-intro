const MAX_LENGTH_TO_SHOW = 6;

function Person ({age,hobbies,name}) {
    const voteText = age > 17 ? "Go Vote!" : "Go Study!";

    const hobbiesLIs = hobbies.map(hobby => <li>{hobby}</li>)
 return (
    <div>
        <p>Learn some information about this person: </p>
        <ul>
            <li>Name: {name.slice(0,MAX_LENGTH_TO_SHOW)}</li>
            <li>Age: {age}</li>
            <ul>
                Hobbies:
                {hobbiesLIs}
            </ul>
        </ul>
        <h3>{voteText}</h3>
    </div>
 );
}