import { handleSubmit } from "../formHandler";
import { checkValidUrl } from "../urlChecker";

describe("Testing the handle submit functionality", () => {
  test("Testing the handleSubmit() function", () => {
    const event = new Event('click', { "target": { "value": 8 } })
    jest.spyOn(event, 'preventDefault');
    document.body.innerHTML += `
    <section>
    <form class="" onsubmit="return Client.handleSubmit(event)">
        <label class="title" for="name">URL:
        </label>
        <input id="name" type="text" name="input" value="" placeholder="Name">
        <input id="submit" type="submit" name="" value="Submit" onclick="return Client.handleSubmit(event)" onsubmit="return Client.handleSubmit(event)">
        <p id="error" class="error" hidden>Please input a valid URL</p>
    </form>

        <section class="results">
            <strong class="title">NLP Results:</strong>
            <ul type="circle">
                <li>
                    <div id="subjectivity"></div>
                </li>
                <li>
                    <div id="score"></div>
                </li>
                <li>
                    <div id="agreement"></div>
                </li>
                <li>
                    <div id="confidence"></div>
                </li>
                <li>
                    <div id="irony"></div>
                </li>
            </ul>
        </section>
  </section>`;
    handleSubmit(event)
    expect(handleSubmit).toBeDefined();
    expect(event.preventDefault).toHaveBeenCalled()
  });
});
