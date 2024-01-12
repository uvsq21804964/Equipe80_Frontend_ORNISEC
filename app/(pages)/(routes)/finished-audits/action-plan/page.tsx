/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */

'use client';

import React, { useState } from 'react';

export default function AddMoreInput() {
  const [inputList, setInputList] = useState([{ firstName: '', lastName: '' }]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index] = { ...list[index], [name]: value };
    setInputList(list);
  };

  const handleRemove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { firstName: '', lastName: '' }]);
  };

  return (
    <div className="flex-col md:flex">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="hidden md:flex items-center justify-center space-y-2">
          <h2
            className="
            text-4xl
            font-bold
            tracking-tight
            text-white
            text-shadow
          "
          >
            Plan d'action
          </h2>
        </div>

        <div
          className="hidden md:flex items-center justify-center flex-col space-y-2 h-full bg-white p-8 mx-auto"
          style={{ maxWidth: '1000px', borderRadius: '0.5rem' }}
        >
          <div className="col-sm-12">
            {inputList.map((x, i) => (
              <div className="row mb-3" key={i}>
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    name="action plan"
                    className="form-control custom-input bg-white px-4 py-8 shadow-md sm:px-10 shadow-slate-900"
                    style={{
                      borderRadius: '0.5rem',
                      height: '5px',
                      width: '800px',
                    }}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </div>

                <div className="form-group col-md-2 mt-4 d-flex justify-content-end">
                  {inputList.length !== 1 && (
                    <button
                      className="btn btn-danger mx-1"
                      onClick={() => handleRemove(i)}
                    >
                      Supprimer
                    </button>
                  )}
                </div>
              </div>
            ))}

            <div className="form-group col-md-2 mt-4">
              <button className="btn btn-success" onClick={handleAddClick}>
                Ajouter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
