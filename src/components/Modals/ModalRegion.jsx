import React from 'react'

export default function ModalRegion({ closeModalRegion }) {
  return (
            <div className="modal-content modal-content--region">
                <div className="modal-top">
                    <h3 className="modal-title">ВАШ РЕГИОН</h3>
                    <button className="modal-close" onClick={closeModalRegion}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.385714 17.6143C0.642857 17.8714 0.9 18 1.28571 18C1.67143 18 1.92857 17.8714 2.18571 17.6143L9 10.8L15.8143 17.6143C16.0714 17.8714 16.4571 18 16.7143 18C16.9714 18 17.3571 17.8714 17.6143 17.6143C18.1286 17.1 18.1286 16.3286 17.6143 15.8143L10.8 9L17.6143 2.18571C18.1286 1.67143 18.1286 0.9 17.6143 0.385714C17.1 -0.128571 16.3286 -0.128571 15.8143 0.385714L9 7.2L2.18571 0.385714C1.67143 -0.128571 0.9 -0.128571 0.385714 0.385714C-0.128571 0.9 -0.128571 1.67143 0.385714 2.18571L7.2 9L0.385714 15.8143C-0.128571 16.3286 -0.128571 17.1 0.385714 17.6143Z" fill="#2B2A29" />
                        </svg>
                    </button>
                </div>
                <div className="modal-region">
                    <div className="modal-container">
                        <h3 className="modal-region__title">ВАШ ГОРОД КРАСНОЯРСК?</h3>
                        <button className="modal-region__btn btn--yellow">ДА</button>
                        <nav className="modal-region__nav">
                            <h3 className="modal-region__nav-title">НЕТ ВЫБРАТЬ ИЗ СПИСКА</h3>
                            <ul className="modal-region__nav-list">
                                <li className="modal-region__nav-item">Волгоград</li>
                                <li className="modal-region__nav-item">Красноярск</li>
                                <li className="modal-region__nav-item">Пенза</li>
                                <li className="modal-region__nav-item">Воронеж</li>
                                <li className="modal-region__nav-item">Москва</li>
                                <li className="modal-region__nav-item">Самара</li>
                                <li className="modal-region__nav-item">Екатеринбург</li>
                                <li className="modal-region__nav-item">Нижний Новгород</li>
                                <li className="modal-region__nav-item">Санкт-Петербург</li>
                                <li className="modal-region__nav-item">Казань</li>
                                <li className="modal-region__nav-item">Новосибирск</li>
                                <li className="modal-region__nav-item">Уфа</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
  )
}
