import Landing from "./Landing";
import Register from "./Register";
import Error from "./Error";
import ProtectedRoute from "./ProtectedRoute";

// Components have to be imported one by one
// importing them in an object and referencing
// ../pages will cause some kind of stack overflow

export { Error, Landing, Register, ProtectedRoute };
