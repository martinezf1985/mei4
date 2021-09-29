
export default function ItemCount({ stock, count, onAdd, producto, setCount }) {

	return (
		<div className="card-footer text-center">
			<div className="btn-group m-2" role="group" aria-label="Basic example">
				<button type="button" className="btn btn-primary" disabled={count === 0} onClick={() => count > 0 && setCount(count - 1)}>-</button>
				<h4><span className=" px-3">{count}</span></h4>
				<button type="button" className="btn btn-primary px-2" disabled={count === stock} onClick={() => count < stock && setCount(count + 1)}>+</button>
			</div>
			<button type="button" className="btn btn-primary m-2" disabled={count === 0} onClick={(e) => { e.preventDefault(); onAdd(count, producto) }}>Agregar al carro</button>
		</div>
	);
}