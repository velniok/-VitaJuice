import React from 'react'
import ModalRegion from './ModalRegion'

export default function ModalBlock({ openModalRegion, closeModalRegion }) {
  return (
    <div className={`modal ${openModalRegion ? "show" : ""}`}>
        <div className="modal-background">
            <ModalRegion closeModalRegion={closeModalRegion} />
        </div>
    </div>
  )
}
