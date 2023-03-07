import { useState } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function CartWidget() {
  const [count, setCount] = useState(1);

  return (
    <div className="navbar-nav ms-auto">
      <a className="nav-link" href="#">
        <FaShoppingBag className="bi" />
        {count > 0 && (
          <span className="badge bg-danger rounded-pill">{count}</span>
        )}
      </a>
    </div>
  );
}

export default CartWidget;
