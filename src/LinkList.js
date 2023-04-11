import React from 'react';

var linkArray = [];
linkArray[0] = 'vlald';

function addToArr() {
    linkArray.push('blabla');
}

function MakeNewList() {
    return (
        <div>
            <p>LinkyLinks</p>
            <form>
                <label>Link: </label>
                <input type="text" id="link" name="link" />
                <button type="submit" onClick={addToArr}>
                    Submit
                </button>
            </form>
            <ul>
                for(var i = linkArray.length; i > 0; i++){}
                <li>
                    <a href="https://www.w3schools.com/">bla </a>
                </li>
            </ul>
        </div>
    );
}

export default MakeNewList;
