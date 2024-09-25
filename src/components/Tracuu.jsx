import React from 'react'

function Tracuu() {
    return (
        <div className="job-result__container ">
            <div className="job-result__wapper">
                <div className="job-result-search__header">
                    <h1 className="job-result__title">Tra cứu kết quả ứng tuyển</h1>
                    <div className="job-result__sub-title">Anh/chị vui lòng nhập số CMND/CCCD hoặc Số điện thoại để tra cứu kết quả ứng tuyển </div>
                </div>
                <div className="job-result-search__form">
                    <div className="job-result-form__control col-12 p-0">
                        <div className="input-title">CMND/CCCD</div>
                        <div className="MuiFormControl-root MuiTextField-root jss1 jss2">
                            <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense"><input aria-invalid="false" autoComplete="off" id="outlined-size-small" placeholder="Nhập số CMND/CCCD" rows={1} type="string" max={999999} min={1} className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" defaultValue /><fieldset aria-hidden="true" className="jss3 MuiOutlinedInput-notchedOutline" style={{ paddingLeft: '8px' }}><legend className="jss4" style={{ width: '0.01px' }}><span>​</span></legend></fieldset></div>
                        </div>
                    </div>
                    <div className="job-result-form__control col-12 p-0">
                        <div className="input-title">Số điện thoại</div>
                        <div className="MuiFormControl-root MuiTextField-root jss1 jss2">
                            <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense"><input aria-invalid="false" autoComplete="off" id="outlined-size-small" placeholder="Nhập số điện thoại" rows={1} type="string" max={999999} min={1} className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" defaultValue /><fieldset aria-hidden="true" className="jss3 MuiOutlinedInput-notchedOutline" style={{ paddingLeft: '8px' }}><legend className="jss4" style={{ width: '0.01px' }}><span>​</span></legend></fieldset></div>
                        </div>
                    </div>
                    <div className="job-result-form__btn-submit">Tra cứu kết quả</div>
                </div>
            </div>
        </div>
    );
}

export default Tracuu;
