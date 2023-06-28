import './App.css';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// Dialog
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function App() {
  function Header() {
    return (
      <header>
        <h1>welcome</h1>
      </header>
    );
  }

  function Nav() {
    return (
      <nav style={{ border: '1px solid gray' }}>
        <ol>
          <li>html</li>
          <li>css</li>
        </ol>
      </nav>
    );
  }

  // onClick={() => {}}

  function Article() {
    const [open, setOpen] = useState(false);
    // open의 값은 false로 시작하고
    // setOpen을 통해서 open의 값을 변경 할 수 있다
    return (
      <article style={{ border: '1px solid gray' }}>
        <h2>welcome</h2>
        Hello web! MUI는 React UI를 만들 때 도움을 주는 라이브러리입니다. 이
        도구를 이용하면 material 디자인 스타일이 적용된 UI를 매우 쉽게 구현할 수
        있습니다. 이 수업을 듣기 위해서는 React 사용법을 알고 계셔야 합니다.
        전혀 모르신다면 React 기본 수업을 먼저 보시고 참여할 것을 권해드립니다.
        <br />
        <br />
        <ButtonGroup variant="outlined">
          <Button
            onClick={() => {
              setOpen(true);
            }}
          >
            Create
          </Button>
          <Button>UPDATE</Button>
        </ButtonGroup>
        <Button variant="outlined">DELETE</Button>
        <Dialog open={open}>
          <DialogTitle>Create</DialogTitle>
          <DialogContent>
            <DialogContentText>Hello Create!!</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined">Create</Button>
            <Button
              variant="outlined"
              onClick={() => {
                setOpen(false);
              }}
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
        {/* <Button variant="outlined">Create</Button>
        <Button variant="outlined">UPDATE</Button>
        <Button variant="outlined">DELETE</Button> */}
      </article>
    );
  }
  return (
    <Container className="App" fixed>
      <Header></Header>
      <Grid container>
        <Grid item xs={2}>
          <Nav></Nav>
        </Grid>
        <Grid item xs={10}>
          <Article></Article>
        </Grid>
      </Grid>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </Container>
  );
}

export default App;
