import Loader from "react-loader"
import { branch, renderComponent } from "recompose"

const loadingIf = branch(props => props.loading, renderComponent(Loader))

export default loadingIf
