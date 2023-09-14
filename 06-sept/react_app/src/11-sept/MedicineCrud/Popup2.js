import React from 'react'

function Popup2() {
  return (
        <form>
          <div className="mb-3">
            <label className="form-label">
              Search Medicine
            </label>
            <input
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Slot
            </label>
            <select
              className="form-control">
                <option value="1">S1</option>
                <option value="2">S2</option>
                <option value="3">S3</option>
              </select>
          </div>
          <div className="mb-3">
            <label className="form-label">
              Quantity
            </label>
            <input
                // min={1}
              type="number"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Record
          </button>
        </form>
  )
}
export default Popup2
