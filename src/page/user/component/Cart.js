import { Icon } from 'assets/icon'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { COLOR } from '../shareComponent/constant'
import { checkLogin } from '../shareComponent/Function/checkLogin'

const Cart = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        if (checkLogin()) {
            navigate('/favouriteBook');
        } else {
            Swal.fire({
                icon: 'info',
                text: 'Rất tiếc! Bạn chưa đăng nhập',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true
            })
        }
    }


    return (
        <button onClick={handleClick}>
            <Icon name="cart" color={COLOR.primaryColor}/>
        </button>
    )
}

export default Cart