import { css } from 'lit-element';

export const fateDiceFaceStyles = css`

  .fate-dice-plus {
    width: var(--fate-die-size, 24px);
    height: var(--fate-die-size, 24px);
    background-size: cover;
    background-image:  url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAsIDAsIDEyLCAxMiI+CiAgPGcgaWQ9IkxheWVyIDEiPgogICAgPHBhdGggZD0iTTEuOTI1LC0wIEwxMC4wNzUsLTAgQzEwLjM0MiwtMCAxMC41OTIsMC4wNSAxMC44MjUsMC4xNSBDMTEuMDU4LDAuMjUgMTEuMjYzLDAuMzg4IDExLjQzNywwLjU2MiBDMTEuNjEyLDAuNzM3IDExLjc1LDAuOTQyIDExLjg1LDEuMTc1IEMxMS45NSwxLjQwOCAxMiwxLjY1OCAxMiwxLjkyNSBMMTIsMTAuMDc1IEMxMiwxMC4zNDIgMTEuOTUsMTAuNTkyIDExLjg1LDEwLjgyNSBDMTEuNzUsMTEuMDU4IDExLjYxMiwxMS4yNjMgMTEuNDM3LDExLjQzNyBDMTEuMjYzLDExLjYxMiAxMS4wNTgsMTEuNzUgMTAuODI1LDExLjg1IEMxMC42LDExLjk0NyAxMC4zNTksMTEuOTkzIDEwLjExNSwxMS45OTkgTDEuODg1LDExLjk5OSBDMS42NCwxMiAxLjQwMiwxMS45NCAxLjE3NSwxMS44NSBDMC45NDIsMTEuNzUgMC43MzcsMTEuNjEyIDAuNTYyLDExLjQzNyBDMC4zODgsMTEuMjYzIDAuMjUsMTEuMDU4IDAuMTUsMTAuODI1IEMwLjA1LDEwLjU5MiAtMCwxMC4zNDIgLTAsMTAuMDc1IEwtMCwxLjkyNSBDLTAsMS42NTggMC4wNSwxLjQwOCAwLjE1LDEuMTc1IEMwLjI1LDAuOTQyIDAuMzg4LDAuNzM3IDAuNTYyLDAuNTYyIEMwLjczNywwLjM4OCAwLjk0MiwwLjI1IDEuMTc1LDAuMTUgQzEuNDA4LDAuMDUgMS42NTgsLTAgMS45MjUsLTAgeiBNNywxIEw1LDEgTDUsNSBMMSw1IEwxLDcgTDUsNyBMNSwxMSBMNywxMSBMNyw3IEwxMSw3IEwxMSw1IEw3LDUgeiIgZmlsbD0iIzAwMDAwMCIvPgogIDwvZz4KICA8ZGVmcy8+Cjwvc3ZnPgo=');
  }
  .fate-dice-blank {
    width: var(--fate-die-size, 24px);
    height: var(--fate-die-size, 24px);
    background-size: cover;
    background-image:  url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCwgMCwgMTIsIDEyIj4KICA8ZyBpZD0iTGF5ZXJfMSI+CiAgICA8cGF0aCBkPSJNMS45MjUsLTAgTDEwLjA3NSwtMCBDMTAuMzQyLC0wIDEwLjU5MiwwLjA1IDEwLjgyNSwwLjE1IEMxMS4wNTgsMC4yNSAxMS4yNjMsMC4zODggMTEuNDM3LDAuNTYyIEMxMS42MTIsMC43MzcgMTEuNzUsMC45NDIgMTEuODUsMS4xNzUgQzExLjk1LDEuNDA4IDEyLDEuNjU4IDEyLDEuOTI1IEwxMiwxMC4wNzYgQzEyLDEwLjM0MyAxMS45NSwxMC41OTIgMTEuODUsMTAuODI2IEMxMS43NSwxMS4wNTkgMTEuNjEyLDExLjI2NCAxMS40MzcsMTEuNDM4IEMxMS4yNjMsMTEuNjEzIDExLjA1OCwxMS43NTEgMTAuODI1LDExLjg1MSBDMTAuNiwxMS45NDggMTAuMzU5LDExLjk5NCAxMC4xMTUsMTIgTDEuODg1LDEyIEMxLjY0LDEyLjAwMSAxLjQwMiwxMS45NDEgMS4xNzUsMTEuODUxIEMwLjk0MiwxMS43NTEgMC43MzcsMTEuNjEzIDAuNTYyLDExLjQzOCBDMC4zODgsMTEuMjY0IDAuMjUsMTEuMDU5IDAuMTUsMTAuODI2IEMwLjA1LDEwLjU5MiAtMCwxMC4zNDMgLTAsMTAuMDc2IEwtMCwxLjkyNSBDLTAsMS42NTggMC4wNSwxLjQwOCAwLjE1LDEuMTc1IEMwLjI1LDAuOTQyIDAuMzg4LDAuNzM3IDAuNTYyLDAuNTYyIEMwLjczNywwLjM4OCAwLjk0MiwwLjI1IDEuMTc1LDAuMTUgQzEuNDA4LDAuMDUgMS42NTgsLTAgMS45MjUsLTAgeiIgZmlsbD0iIzAwMDAwMCIvPgogIDwvZz4KPC9zdmc+Cg==');
  }
  .fate-dice-minus {
    width: var(--fate-die-size, 24px);
    height: var(--fate-die-size, 24px);
    background-size: cover;
    background-image:  url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAsIDAsIDEyLCAxMiI+CiAgPGcgaWQ9IkxheWVyIDEiPgogICAgPHBhdGggZD0iTTEuOTI1LDExLjk5OSBMMTAuMDc1LDExLjk5OSBDMTAuMzQyLDExLjk5OSAxMC41OTIsMTEuOTQ5IDEwLjgyNSwxMS44NDkgQzExLjA1OCwxMS43NDkgMTEuMjYzLDExLjYxMiAxMS40MzgsMTEuNDM3IEMxMS42MTIsMTEuMjYyIDExLjc1LDExLjA1NyAxMS44NSwxMC44MjQgQzExLjk1LDEwLjU5MSAxMiwxMC4zNDEgMTIsMTAuMDc0IEwxMiwxLjkyNCBDMTIsMS42NTcgMTEuOTUsMS40MDcgMTEuODUsMS4xNzQgQzExLjc1LDAuOTQxIDExLjYxMiwwLjczNyAxMS40MzgsMC41NjIgQzExLjI2MywwLjM4NyAxMS4wNTgsMC4yNDkgMTAuODI1LDAuMTQ5IEMxMC42LDAuMDUyIDEwLjM1OSwwLjAwNiAxMC4xMTUsMCBMMS44ODUsMCBDMS42NCwtMC4wMDEgMS40MDIsMC4wNTkgMS4xNzUsMC4xNDkgQzAuOTQyLDAuMjQ5IDAuNzM3LDAuMzg3IDAuNTYyLDAuNTYyIEMwLjM4OCwwLjczNyAwLjI1LDAuOTQxIDAuMTUsMS4xNzQgQzAuMDUsMS40MDcgMCwxLjY1NyAwLDEuOTI0IEwwLDEwLjA3NCBDMCwxMC4zNDEgMC4wNSwxMC41OTEgMC4xNSwxMC44MjQgQzAuMjUsMTEuMDU3IDAuMzg4LDExLjI2MiAwLjU2MiwxMS40MzcgQzAuNzM3LDExLjYxMiAwLjk0MiwxMS43NDkgMS4xNzUsMTEuODQ5IEMxLjQwOCwxMS45NDkgMS42NTgsMTEuOTk5IDEuOTI1LDExLjk5OSB6IE0xMSw2Ljk5OSBMMSw2Ljk5OSBMMSw0Ljk5OSBMMTEsNC45OTkgeiIgZmlsbD0iIzAwMDAwMCIvPgogIDwvZz4KICA8ZGVmcy8+Cjwvc3ZnPgo=');
  }
`; 

export default fateDiceFaceStyles;