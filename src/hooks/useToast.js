import {toast} from 'react-toastify';
import {useEffect, useState} from 'react';


export function useToast () {
  const [isShow, toggleShow] = useState(false);
  const [info, SetToastInfo] = useState("");

  useEffect(() => {
    console.log(info);
    if (isShow) {
      toast(info.name + "  " +info.price +  "\n Press E to Enter", {
        position: 'bottom-right',
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        autoClose: false
      });
    } else {
      toast.dismiss();
      SetToastInfo("")
    }
    if (toast.isShow) {

    }

  }, [isShow, info]);



  function showToast (info) {
    toggleShow(true);
    SetToastInfo(info)
  }

  function clearToast () {
    toggleShow(false);
  }

  return {
    showToast,
    clearToast
  };
}
