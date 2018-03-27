import { injectGlobal } from "styled-components"
import reset from "styled-reset"

injectGlobal`
  ${reset}

  body {
    margin: 0;
    border: 0;
    padding: 0;
    font-family: 'Helvetica';
  }
`
