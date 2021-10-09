import toastify, {toast} from 'react-toastify';
import {useEffect, useState} from 'react';
import {useKeyPress} from 'react-use';


export function useToast () {
  const [isShow, toggleShow] = useState(false);
  const [info, SetToastInfo] = useState("");

  useEffect(() => {
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

  }, [isShow, info]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch(e.code) {
        case "KeyE":
          window.open(info.url, "__blank");
        default: return;
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isShow, info])


  function showToast (info) {
    console.log(info);
    !isShow && toggleShow(true);
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
