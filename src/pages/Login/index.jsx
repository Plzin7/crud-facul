import './style.css'

export function Login() {

  return (
    <main className="box-login">
      <div className="overlay"></div>
      <div className="container"></div>

      <form >
        <div className="title-login">
          <div>
            <h1>Login</h1>
          </div>
        </div>

        <div className="group">
          <label for="email">Email:</label>
          <input
            id="email"
            type="text"
            placeholder="Type your email"
          />
        </div>

        <div className="group">
          <label for="password"> Password: </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password here"
          />
        </div>

        <div className="i-forget-my-password">
          <a href="">I forget my password</a>
        </div>

        <button id="btn-enter">Enter</button>
      </form>
    </main>
  )
}
