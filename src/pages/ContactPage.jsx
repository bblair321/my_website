export default function ContactPage() {
  return (
    <section>
      <h2>Contact Us</h2>
      <p>Have questions or need support? Reach out to us!</p>
      <form>
        <label>
          Name: <br />
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email: <br />
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Message: <br />
          <textarea name="message" rows="5"></textarea>
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
