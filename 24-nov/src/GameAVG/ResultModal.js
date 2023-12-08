import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearData } from "../feature/game/gameSlice";

export default function Modal({showModal,setShowModal}) {
    const playerList = useSelector(state => state.gameReducer.players)
    const avgValue = useSelector(state => state.gameReducer.averageValue)
    const dispatch = useDispatch()
    // console.log(playerList)

    function handleClose() {
       setShowModal(false)
       dispatch(clearData())         
    }
//   const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      {showModal ? (
        <>
          <div
            className="text-black justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Result - {avgValue}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative text-start p-6 flex-auto ">
                    {
                        playerList.map((item,index)=>(
                            <h4 className={`${index===playerList.length-1?'bg-red-600':index ===0 ? 'bg-green-600':'bg-green-300'} px-2 rounded my-1`} key={index+1} >{item.name} --- {item.number}</h4>
                        ))
                    }
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 bg-red-300 rounded font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}