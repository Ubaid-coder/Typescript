import React, { createContext, useContext, useRef, useState, type ChangeEvent, type ReactNode } from 'react'


function NameInput() {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }
  return <input onChange={handleChange} />
}

function SaveButton() {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
  }
  return <button onClick={handleClick} >Save</button>
}

function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  return <input ref={inputRef} onFocus={() => inputRef.current?.select()} />
}

type CardProps = {
  title: string;
  children?: React.ReactNode
}

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Network Error');
  return res.json() as Promise<T>;
}

async function loadPosts() {
  type Post = { id: number; title: string };
  const post = await fetchJson<Post[]>("/api/posts");
}

type Theme = 'light' | 'dark';
const ThemeContext = createContext<{ theme: Theme, toggle(): void } | null>(null);


function ThemeProvider({children}:{children: ReactNode}) {
  const [theme, setTheme] = useState<Theme>("light");
  const value = { theme, toggle: () => setTheme(t => (t === 'light' ? 'dark' : "light")) };
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

function useTheme(){
  const ctx = useContext(ThemeContext);
  if(!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}

function Card({ title, children }: CardProps) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  )
}


function App() {
  const [count, setCount] = useState<number>(0);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');


  type User = { id: number; name: string };
  const [user, setUser] = useState<User | null>(null)

  return (
    <div>App</div>
  )
}

export default App