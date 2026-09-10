console.log('i am here')

class myHeader extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
            <header>
                <h1>A Portfolio</h1>
                <div id="navigationButtons">
                    <button onclick="window.location.href = 'maingame.html'">HOME</button>
                    <button onclick="window.location.href = 'GWorld.html'">GameWorld</button>
                    <button onclick="window.location.href = 'game1.html'">Game 1</button>
                    <button onclick="window.location.href = 'game2.html'">Game 2</button>
                    <button onclick="window.location.href = 'game3.html'">Game 3</button>
                </div>
            </header>`;
    }
}

class myFooter extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
            <footer>
                <p>This'll be the footer</p>
            </footer>`;
    }
}

class myOpener extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
            <div id="opener">
                <form action="https://api.web3forms.com/submit" method="POST" id="submission">
                    <input type="hidden" name="access_key" value="a5dd0363-ab97-47a1-8d4d-185add72010c">
                    <label for="">Name<input type="text" id="visitorName" name="visitorName"></label>
                    <label for="">Company<input type="text" id="visitorCompany" name="visitorCompany"></label>
                    <input type="submit" id="submitVisitor" value="Submit Details">
                    <input type="button" id="submitNope" value="Im good, thanks">
                </form>
            </div>`
    }
}

customElements.define ('my-header', myHeader)
customElements.define ('my-footer', myFooter)
customElements.define ('my-opener', myOpener)