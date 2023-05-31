import { toast } from "react-toastify";
import { Action, removeItem } from "../../store/tokens/Action";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { TokenState } from "../../store/tokens/tokensReducer";

function Carrinho() {

  const navigate = useNavigate();
  const carrinho = useSelector<TokenState, TokenState['produtos']>(
    (state) => state.produtos
  );
  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
);

  let valorTotal = 0
  const dispatch = useDispatch()
  function buy() {
    dispatch(removeItem([]))
    toast.success('Compra realizada com sucesso', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
    });
    navigate('/home')
  }

  var Carrinho;

  if(token != "") {
  Carrinho = 
  <h1>asdfasdf</h1>
  {carrinho.map(item => (
    <form onSubmit={buy}>
      <p>{item.nome}</p>
      <p>{item.valor}</p>
      <img src={item.foto} alt={item.nome} />
      valor total: {carrinho.map((price) => {
        { valorTotal = valorTotal + price.valor }
      })}{valorTotal}

      <Button type='submit'></Button>

    </form>
  ))}}

  return (
    <>
    {Carrinho}
    </>
  )
}

export default Carrinho


