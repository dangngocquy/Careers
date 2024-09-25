import React from 'react'
import { useNavigate } from 'react-router-dom';

function Ungtuyen() {
    const navigate = useNavigate();
    return (
        <div className="apply-form__container ">
            <div className="apply-form__wapper">
                <div className="apply-form__body">
                    <div className="apply-form__main">
                        <h1 className="apply-form__title">Thông tin ứng tuyển</h1>
                        <h2 className="apply-form__group-name">Thông tin cá nhân</h2>
                        <div className="apply-form__group-body row no-gutters">
                            <div className="apply-form__control col-12 p-0">
                                <div className="input-title--required">Họ và tên</div>
                                <div className="MuiFormControl-root MuiTextField-root jss1 jss2">
                                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense"><input aria-invalid="false" autocomplete="off" id="outlined-size-small" placeholder="Nhập họ tên" rows="1" type="string" max="999999" min="1" className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" value="" /><fieldset aria-hidden="true" className="jss3 MuiOutlinedInput-notchedOutline" style={{ paddingLeft: '8px' }}><legend className="jss4" style={{ width: '0.01px' }}><span>​</span></legend></fieldset></div>
                                </div>
                            </div>
                            <div className="apply-form__control col-12 p-0">
                                <div className="input-title--required">Ngày sinh</div>
                                <div className="MuiFormControl-root MuiTextField-root jss7">
                                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd MuiInputBase-marginDense MuiOutlinedInput-marginDense">
                                        <input aria-invalid="false" placeholder="DD/MM/YYYY" type="text" className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" defaultValue />
                                        <div className="MuiInputAdornment-root MuiInputAdornment-positionEnd MuiInputAdornment-marginDense">
                                            <button className="MuiButtonBase-root MuiIconButton-root" tabIndex={0} type="button">
                                                <span className="MuiIconButton-label">
                                                    <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12.6668 2.66667H11.3335V2C11.3335 1.82319 11.2633 1.65362 11.1382 1.5286C11.0132 1.40357 10.8436 1.33334 10.6668 1.33334C10.49 1.33334 10.3204 1.40357 10.1954 1.5286C10.0704 1.65362 10.0002 1.82319 10.0002 2V2.66667H6.00016V2C6.00016 1.82319 5.92992 1.65362 5.8049 1.5286C5.67988 1.40357 5.51031 1.33334 5.3335 1.33334C5.15669 1.33334 4.98712 1.40357 4.86209 1.5286C4.73707 1.65362 4.66683 1.82319 4.66683 2V2.66667H3.3335C2.80306 2.66667 2.29436 2.87738 1.91928 3.25246C1.54421 3.62753 1.3335 4.13624 1.3335 4.66667V12.6667C1.3335 13.1971 1.54421 13.7058 1.91928 14.0809C2.29436 14.456 2.80306 14.6667 3.3335 14.6667H12.6668C13.1973 14.6667 13.706 14.456 14.081 14.0809C14.4561 13.7058 14.6668 13.1971 14.6668 12.6667V4.66667C14.6668 4.13624 14.4561 3.62753 14.081 3.25246C13.706 2.87738 13.1973 2.66667 12.6668 2.66667ZM13.3335 12.6667C13.3335 12.8435 13.2633 13.0131 13.1382 13.1381C13.0132 13.2631 12.8436 13.3333 12.6668 13.3333H3.3335C3.15669 13.3333 2.98712 13.2631 2.86209 13.1381C2.73707 13.0131 2.66683 12.8435 2.66683 12.6667V8H13.3335V12.6667ZM13.3335 6.66667H2.66683V4.66667C2.66683 4.48986 2.73707 4.32029 2.86209 4.19526C2.98712 4.07024 3.15669 4 3.3335 4H4.66683V4.66667C4.66683 4.84348 4.73707 5.01305 4.86209 5.13807C4.98712 5.2631 5.15669 5.33334 5.3335 5.33334C5.51031 5.33334 5.67988 5.2631 5.8049 5.13807C5.92992 5.01305 6.00016 4.84348 6.00016 4.66667V4H10.0002V4.66667C10.0002 4.84348 10.0704 5.01305 10.1954 5.13807C10.3204 5.2631 10.49 5.33334 10.6668 5.33334C10.8436 5.33334 11.0132 5.2631 11.1382 5.13807C11.2633 5.01305 11.3335 4.84348 11.3335 4.66667V4H12.6668C12.8436 4 13.0132 4.07024 13.1382 4.19526C13.2633 4.32029 13.3335 4.48986 13.3335 4.66667V6.66667Z" fill="#333333" />
                                                    </svg>
                                                </span>
                                                <span className="MuiTouchRipple-root" />
                                            </button>
                                        </div>
                                        <fieldset aria-hidden="true" className="jss3 MuiOutlinedInput-notchedOutline" style={{ paddingLeft: '8px' }}><legend className="jss4" style={{ width: '0.01px' }}><span>​</span></legend></fieldset>
                                    </div>
                                </div>
                            </div>
                            <div className="apply-form__control col-12 p-0">
                                <div className="input-title--required">CMND/CCCD</div>
                                <div className="MuiFormControl-root MuiTextField-root jss1 jss2">
                                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense"><input aria-invalid="false" autoComplete="off" id="outlined-size-small" placeholder="Nhập số CMND/CCCD" rows={1} type="string" max={999999} min={1} className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" defaultValue /><fieldset aria-hidden="true" className="jss3 MuiOutlinedInput-notchedOutline" style={{ paddingLeft: '8px' }}><legend className="jss4" style={{ width: '0.01px' }}><span>​</span></legend></fieldset></div>
                                </div>
                            </div>
                            <div className="apply-form__control col-12 p-0">
                                <div className="input-title--required">Điện thoại</div>
                                <div className="MuiFormControl-root MuiTextField-root jss1 jss2">
                                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense"><input aria-invalid="false" autoComplete="off" id="outlined-size-small" placeholder="Nhập số điện thoại" rows={1} type="string" max={999999} min={1} className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" defaultValue /><fieldset aria-hidden="true" className="jss3 MuiOutlinedInput-notchedOutline" style={{ paddingLeft: '8px' }}><legend className="jss4" style={{ width: '0.01px' }}><span>​</span></legend></fieldset></div>
                                </div>
                            </div>
                            <div className="apply-form__control col-12 p-0">
                                <div className="input-title">Email (Bạn vui lòng nhập email để nhận kết quả phỏng vấn)</div>
                                <div className="MuiFormControl-root MuiTextField-root jss1 jss2">
                                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense"><input aria-invalid="false" autoComplete="off" id="outlined-size-small" placeholder="Nhập email" rows={1} type="string" max={999999} min={1} className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" defaultValue /><fieldset aria-hidden="true" className="jss3 MuiOutlinedInput-notchedOutline" style={{ paddingLeft: '8px' }}><legend className="jss4" style={{ width: '0.01px' }}><span>​</span></legend></fieldset></div>
                                </div>
                            </div>
                            <div className="apply-form__control col-12 col-lg-6 p-0 pr-12px pr-mb-0">
                                <div className="input-title">Giới tính</div>
                                <div className="row no-gutters">
                                    <div className="col-6 p-0 pr-4px">
                                        <div className="custom-radio__container custom-radio__container--active"><label className="MuiFormControlLabel-root"><span className="MuiButtonBase-root MuiIconButton-root jss12 MuiRadio-root MuiRadio-colorSecondary jss9 jss13 Mui-checked MuiIconButton-colorSecondary" aria-disabled="false"><span className="MuiIconButton-label"><input className="jss15" name="radio-button-demo" type="radio" defaultValue="Nam" defaultChecked /><span className="jss10 jss11" /></span><span className="MuiTouchRipple-root" /></span><span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Nam</span></label></div>
                                    </div>
                                    <div className="col-6 p-0 pl-4px">
                                        <div className="custom-radio__container "><label className="MuiFormControlLabel-root"><span className="MuiButtonBase-root MuiIconButton-root jss12 MuiRadio-root MuiRadio-colorSecondary jss9 MuiIconButton-colorSecondary" aria-disabled="false"><span className="MuiIconButton-label"><input className="jss15" name="radio-button-demo" type="radio" defaultValue="Nữ" /><span className="jss10" /></span><span className="MuiTouchRipple-root" /></span><span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Nữ</span></label></div>
                                    </div>
                                </div>
                            </div>
                            <div className="apply-form__control col-12 col-lg-6 p-0 pr-12px pr-mb-0">
                                <div className="input-title--required">Chiều cao</div>
                                <div className="input-unit">
                                    <div className="input-unit__text"><input type="number" placeholder="Nhập chiều cao" defaultValue /></div>
                                    <div className="input-unit__after">cm</div>
                                </div>
                            </div>
                            <div className="apply-form__control col-12 col-lg-6 p-0 pl-12px pl-mb-0">
                                <div className="input-title--required">Cân nặng</div>
                                <div className="input-unit">
                                    <div className="input-unit__text"><input type="number" placeholder="Nhập cân nặng" defaultValue /></div>
                                    <div className="input-unit__after">kg</div>
                                </div>
                            </div>
                            <div className="apply-form__control col-12 p-0">
                                <div className="input-title">Ảnh chân dung</div>
                                <div className="input-profile__image">
                                    <input accept="image/*" id="avatar" type="file" style={{ display: 'none' }} />
                                    <label className="input-profile__select-area-label" htmlFor="avatar">
                                        <div className="input-profile__select-area">
                                            <svg width="32px" height="32px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M25.3333 14.6666H17.3333V6.66665C17.3333 6.31302 17.1928 5.97389 16.9427 5.72384C16.6927 5.47379 16.3535 5.33331 15.9999 5.33331C15.6463 5.33331 15.3072 5.47379 15.0571 5.72384C14.8071 5.97389 14.6666 6.31302 14.6666 6.66665V14.6666H6.66659C6.31296 14.6666 5.97382 14.8071 5.72378 15.0572C5.47373 15.3072 5.33325 15.6464 5.33325 16C5.33325 16.3536 5.47373 16.6927 5.72378 16.9428C5.97382 17.1928 6.31296 17.3333 6.66659 17.3333H14.6666V25.3333C14.6666 25.6869 14.8071 26.0261 15.0571 26.2761C15.3072 26.5262 15.6463 26.6666 15.9999 26.6666C16.3535 26.6666 16.6927 26.5262 16.9427 26.2761C17.1928 26.0261 17.3333 25.6869 17.3333 25.3333V17.3333H25.3333C25.6869 17.3333 26.026 17.1928 26.2761 16.9428C26.5261 16.6927 26.6666 16.3536 26.6666 16C26.6666 15.6464 26.5261 15.3072 26.2761 15.0572C26.026 14.8071 25.6869 14.6666 25.3333 14.6666Z" fill="#AFAFAF" />
                                            </svg>
                                        </div>
                                    </label>
                                </div>
                                <div className="input-profile__note">(*) Ảnh rõ mặt, không chỉnh sửa. Hỗ trợ định dạng *.png,*.jpg và tối đa 4MB.</div>
                            </div>
                        </div>
                        <h2 className="apply-form__group-name">Địa chỉ liên hệ</h2>
                        <div className="apply-form__group-body row no-gutters">
                            <div className="apply-form__control col-12 p-0">
                                <div className="input-title--required">Tỉnh/thành phố</div>
                                <div className="MuiAutocomplete-root jss17 MuiAutocomplete-hasPopupIcon" aria-expanded="false">
                                    <div className="MuiFormControl-root MuiTextField-root jss16 MuiFormControl-fullWidth">
                                        <div className="MuiInputBase-root MuiOutlinedInput-root MuiAutocomplete-inputRoot MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd MuiInputBase-marginDense MuiOutlinedInput-marginDense">
                                            <input aria-invalid="false" autoComplete="off" placeholder="Chọn tỉnh/thành phố" type="text" className="MuiInputBase-input MuiOutlinedInput-input MuiAutocomplete-input MuiAutocomplete-inputFocused MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" aria-autocomplete="list" autoCapitalize="none" spellCheck="false" defaultValue id="mui-13398" />
                                            <div className="MuiAutocomplete-endAdornment">
                                                <button className="MuiButtonBase-root MuiIconButton-root MuiAutocomplete-popupIndicator" tabIndex={-1} type="button" aria-label="Open" title="Open">
                                                    <span className="MuiIconButton-label">
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M18 9.70504L16.59 8.29504L12 12.875L7.41 8.29504L6 9.70504L12 15.705L18 9.70504Z" fill="#545454" />
                                                        </svg>
                                                    </span>
                                                    <span className="MuiTouchRipple-root" />
                                                </button>
                                            </div>
                                            <fieldset aria-hidden="true" className="jss3 MuiOutlinedInput-notchedOutline" style={{ paddingLeft: '8px' }}><legend className="jss4" style={{ width: '0.01px' }}><span>​</span></legend></fieldset>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="apply-form__control col-12 col-lg-6 p-0 pr-12px pr-mb-0">
                                <div className="input-title--required">Quận/huyện</div>
                                <div className="MuiAutocomplete-root jss17 MuiAutocomplete-hasPopupIcon" aria-expanded="false">
                                    <div className="MuiFormControl-root MuiTextField-root jss16 MuiFormControl-fullWidth">
                                        <div className="MuiInputBase-root MuiOutlinedInput-root MuiAutocomplete-inputRoot MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd MuiInputBase-marginDense MuiOutlinedInput-marginDense">
                                            <input aria-invalid="false" autoComplete="off" placeholder="Chọn Quận/huyện" type="text" className="MuiInputBase-input MuiOutlinedInput-input MuiAutocomplete-input MuiAutocomplete-inputFocused MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" aria-autocomplete="list" autoCapitalize="none" spellCheck="false" defaultValue id="mui-46861" />
                                            <div className="MuiAutocomplete-endAdornment">
                                                <button className="MuiButtonBase-root MuiIconButton-root MuiAutocomplete-popupIndicator" tabIndex={-1} type="button" aria-label="Open" title="Open">
                                                    <span className="MuiIconButton-label">
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M18 9.70504L16.59 8.29504L12 12.875L7.41 8.29504L6 9.70504L12 15.705L18 9.70504Z" fill="#545454" />
                                                        </svg>
                                                    </span>
                                                    <span className="MuiTouchRipple-root" />
                                                </button>
                                            </div>
                                            <fieldset aria-hidden="true" className="jss3 MuiOutlinedInput-notchedOutline" style={{ paddingLeft: '8px' }}><legend className="jss4" style={{ width: '0.01px' }}><span>​</span></legend></fieldset>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="apply-form__control col-12 col-lg-6 p-0 pl-12px pl-mb-0">
                                <div className="input-title--required">Phường/xã</div>
                                <div className="MuiAutocomplete-root jss17 MuiAutocomplete-hasPopupIcon" aria-expanded="false">
                                    <div className="MuiFormControl-root MuiTextField-root jss16 MuiFormControl-fullWidth">
                                        <div className="MuiInputBase-root MuiOutlinedInput-root MuiAutocomplete-inputRoot MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd MuiInputBase-marginDense MuiOutlinedInput-marginDense">
                                            <input aria-invalid="false" autoComplete="off" placeholder="Chọn Phường/xã" type="text" className="MuiInputBase-input MuiOutlinedInput-input MuiAutocomplete-input MuiAutocomplete-inputFocused MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" aria-autocomplete="list" autoCapitalize="none" spellCheck="false" defaultValue id="mui-93631" />
                                            <div className="MuiAutocomplete-endAdornment">
                                                <button className="MuiButtonBase-root MuiIconButton-root MuiAutocomplete-popupIndicator" tabIndex={-1} type="button" aria-label="Open" title="Open">
                                                    <span className="MuiIconButton-label">
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M18 9.70504L16.59 8.29504L12 12.875L7.41 8.29504L6 9.70504L12 15.705L18 9.70504Z" fill="#545454" />
                                                        </svg>
                                                    </span>
                                                    <span className="MuiTouchRipple-root" />
                                                </button>
                                            </div>
                                            <fieldset aria-hidden="true" className="jss3 MuiOutlinedInput-notchedOutline" style={{ paddingLeft: '8px' }}><legend className="jss4" style={{ width: '0.01px' }}><span>​</span></legend></fieldset>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="apply-form__control col-12 p-0">
                                <div className="input-title--required">Địa chỉ</div>
                                <div className="MuiFormControl-root MuiTextField-root jss1 jss2">
                                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense"><input aria-invalid="false" autoComplete="off" id="outlined-size-small" placeholder="Nhập số nhà, tên đường..." rows={1} type="string" max={999999} min={1} className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" defaultValue /><fieldset aria-hidden="true" className="jss3 MuiOutlinedInput-notchedOutline" style={{ paddingLeft: '8px' }}><legend className="jss4" style={{ width: '0.01px' }}><span>​</span></legend></fieldset></div>
                                </div>
                            </div>
                        </div>
                        <h2 className="apply-form__group-name">Kinh nghiệm làm việc</h2>
                        <div className="apply-form__group-body row no-gutters">
                            <div className="apply-form__control col-12 col-lg-6 p-0 pr-12px pr-mb-0">
                                <div className="custom-radio__container custom-radio__container--active"><label className="MuiFormControlLabel-root"><span className="MuiButtonBase-root MuiIconButton-root jss12 MuiRadio-root MuiRadio-colorSecondary jss9 jss13 Mui-checked MuiIconButton-colorSecondary" aria-disabled="false"><span className="MuiIconButton-label"><input className="jss15" name="radio-button-demo" type="radio" defaultValue={1} defaultChecked /><span className="jss10 jss11" /></span><span className="MuiTouchRipple-root" /></span><span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Có kinh nghiệm</span></label></div>
                            </div>
                            <div className="apply-form__control mt-0 mt-mb-10px col-12 col-lg-6 p-0 pl-12px pl-mb-0">
                                <div className="custom-radio__container "><label className="MuiFormControlLabel-root"><span className="MuiButtonBase-root MuiIconButton-root jss12 MuiRadio-root MuiRadio-colorSecondary jss9 MuiIconButton-colorSecondary" aria-disabled="false"><span className="MuiIconButton-label"><input className="jss15" name="radio-button-demo" type="radio" defaultValue={0} /><span className="jss10" /></span><span className="MuiTouchRipple-root" /></span><span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Không có kinh nghiệm</span></label></div>
                            </div>
                            <div className="apply-form__control col-12 p-0">
                                <div className="apply-form__exp-list">
                                    <div className="apply-form__exp-item">
                                        <div className="row no-gutters">
                                            <div className="apply-form__control col-12 p-0">
                                                <div className="input-title--required">Vị trí đảm nhiệm</div>
                                                <div className="MuiFormControl-root MuiTextField-root jss1 jss2">
                                                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense"><input aria-invalid="false" autoComplete="off" id="outlined-size-small" placeholder="Nhập vị trí đảm nhiệm" rows={1} type="string" max={999999} min={1} className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" defaultValue /><fieldset aria-hidden="true" className="jss3 MuiOutlinedInput-notchedOutline" style={{ paddingLeft: '8px' }}><legend className="jss4" style={{ width: '0.01px' }}><span>​</span></legend></fieldset></div>
                                                </div>
                                            </div>
                                            <div className="apply-form__control col-12 p-0">
                                                <div className="input-title--required">Công ty/Doanh nghiệp</div>
                                                <div className="MuiFormControl-root MuiTextField-root jss1 jss2">
                                                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense"><input aria-invalid="false" autoComplete="off" id="outlined-size-small" placeholder="Nhập tên công ty hoặc doanh nghiệp" rows={1} type="string" max={999999} min={1} className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" defaultValue /><fieldset aria-hidden="true" className="jss3 MuiOutlinedInput-notchedOutline" style={{ paddingLeft: '8px' }}><legend className="jss4" style={{ width: '0.01px' }}><span>​</span></legend></fieldset></div>
                                                </div>
                                            </div>
                                            <div className="apply-form__control col-12 p-0">
                                                <div className="switch-control">
                                                    <div className="switch-control__title">Hiện đang làm việc tại đây</div>
                                                    <span className="MuiSwitch-root jss19"><span className="MuiButtonBase-root MuiIconButton-root jss24 MuiSwitch-switchBase jss20 MuiSwitch-colorSecondary" aria-disabled="false"><span className="MuiIconButton-label"><input className="jss27 MuiSwitch-input" type="checkbox" defaultValue /><span className="MuiSwitch-thumb jss21" /></span><span className="MuiTouchRipple-root" /></span><span className="MuiSwitch-track jss22" /></span>
                                                </div>
                                            </div>
                                            <div className="apply-form__control col-6 p-0 pr-12px pr-mb-4px">
                                                <div className="input-title--required">Từ ngày</div>
                                                <div className="MuiFormControl-root MuiTextField-root jss7">
                                                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd MuiInputBase-marginDense MuiOutlinedInput-marginDense">
                                                        <input aria-invalid="false" placeholder="MM/YYYY" type="text" className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" defaultValue />
                                                        <div className="MuiInputAdornment-root MuiInputAdornment-positionEnd MuiInputAdornment-marginDense">
                                                            <button className="MuiButtonBase-root MuiIconButton-root" tabIndex={0} type="button">
                                                                <span className="MuiIconButton-label">
                                                                    <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M12.6668 2.66667H11.3335V2C11.3335 1.82319 11.2633 1.65362 11.1382 1.5286C11.0132 1.40357 10.8436 1.33334 10.6668 1.33334C10.49 1.33334 10.3204 1.40357 10.1954 1.5286C10.0704 1.65362 10.0002 1.82319 10.0002 2V2.66667H6.00016V2C6.00016 1.82319 5.92992 1.65362 5.8049 1.5286C5.67988 1.40357 5.51031 1.33334 5.3335 1.33334C5.15669 1.33334 4.98712 1.40357 4.86209 1.5286C4.73707 1.65362 4.66683 1.82319 4.66683 2V2.66667H3.3335C2.80306 2.66667 2.29436 2.87738 1.91928 3.25246C1.54421 3.62753 1.3335 4.13624 1.3335 4.66667V12.6667C1.3335 13.1971 1.54421 13.7058 1.91928 14.0809C2.29436 14.456 2.80306 14.6667 3.3335 14.6667H12.6668C13.1973 14.6667 13.706 14.456 14.081 14.0809C14.4561 13.7058 14.6668 13.1971 14.6668 12.6667V4.66667C14.6668 4.13624 14.4561 3.62753 14.081 3.25246C13.706 2.87738 13.1973 2.66667 12.6668 2.66667ZM13.3335 12.6667C13.3335 12.8435 13.2633 13.0131 13.1382 13.1381C13.0132 13.2631 12.8436 13.3333 12.6668 13.3333H3.3335C3.15669 13.3333 2.98712 13.2631 2.86209 13.1381C2.73707 13.0131 2.66683 12.8435 2.66683 12.6667V8H13.3335V12.6667ZM13.3335 6.66667H2.66683V4.66667C2.66683 4.48986 2.73707 4.32029 2.86209 4.19526C2.98712 4.07024 3.15669 4 3.3335 4H4.66683V4.66667C4.66683 4.84348 4.73707 5.01305 4.86209 5.13807C4.98712 5.2631 5.15669 5.33334 5.3335 5.33334C5.51031 5.33334 5.67988 5.2631 5.8049 5.13807C5.92992 5.01305 6.00016 4.84348 6.00016 4.66667V4H10.0002V4.66667C10.0002 4.84348 10.0704 5.01305 10.1954 5.13807C10.3204 5.2631 10.49 5.33334 10.6668 5.33334C10.8436 5.33334 11.0132 5.2631 11.1382 5.13807C11.2633 5.01305 11.3335 4.84348 11.3335 4.66667V4H12.6668C12.8436 4 13.0132 4.07024 13.1382 4.19526C13.2633 4.32029 13.3335 4.48986 13.3335 4.66667V6.66667Z" fill="#333333" />
                                                                    </svg>
                                                                </span>
                                                                <span className="MuiTouchRipple-root" />
                                                            </button>
                                                        </div>
                                                        <fieldset aria-hidden="true" className="jss3 MuiOutlinedInput-notchedOutline" style={{ paddingLeft: '8px' }}><legend className="jss4" style={{ width: '0.01px' }}><span>​</span></legend></fieldset>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="apply-form__control col-6 p-0 pl-12px pl-mb-4px">
                                                <div className="input-title--required">Đến ngày</div>
                                                <div className="MuiFormControl-root MuiTextField-root jss7">
                                                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd MuiInputBase-marginDense MuiOutlinedInput-marginDense">
                                                        <input aria-invalid="false" placeholder="MM/YYYY" type="text" className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" defaultValue />
                                                        <div className="MuiInputAdornment-root MuiInputAdornment-positionEnd MuiInputAdornment-marginDense">
                                                            <button className="MuiButtonBase-root MuiIconButton-root" tabIndex={0} type="button">
                                                                <span className="MuiIconButton-label">
                                                                    <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M12.6668 2.66667H11.3335V2C11.3335 1.82319 11.2633 1.65362 11.1382 1.5286C11.0132 1.40357 10.8436 1.33334 10.6668 1.33334C10.49 1.33334 10.3204 1.40357 10.1954 1.5286C10.0704 1.65362 10.0002 1.82319 10.0002 2V2.66667H6.00016V2C6.00016 1.82319 5.92992 1.65362 5.8049 1.5286C5.67988 1.40357 5.51031 1.33334 5.3335 1.33334C5.15669 1.33334 4.98712 1.40357 4.86209 1.5286C4.73707 1.65362 4.66683 1.82319 4.66683 2V2.66667H3.3335C2.80306 2.66667 2.29436 2.87738 1.91928 3.25246C1.54421 3.62753 1.3335 4.13624 1.3335 4.66667V12.6667C1.3335 13.1971 1.54421 13.7058 1.91928 14.0809C2.29436 14.456 2.80306 14.6667 3.3335 14.6667H12.6668C13.1973 14.6667 13.706 14.456 14.081 14.0809C14.4561 13.7058 14.6668 13.1971 14.6668 12.6667V4.66667C14.6668 4.13624 14.4561 3.62753 14.081 3.25246C13.706 2.87738 13.1973 2.66667 12.6668 2.66667ZM13.3335 12.6667C13.3335 12.8435 13.2633 13.0131 13.1382 13.1381C13.0132 13.2631 12.8436 13.3333 12.6668 13.3333H3.3335C3.15669 13.3333 2.98712 13.2631 2.86209 13.1381C2.73707 13.0131 2.66683 12.8435 2.66683 12.6667V8H13.3335V12.6667ZM13.3335 6.66667H2.66683V4.66667C2.66683 4.48986 2.73707 4.32029 2.86209 4.19526C2.98712 4.07024 3.15669 4 3.3335 4H4.66683V4.66667C4.66683 4.84348 4.73707 5.01305 4.86209 5.13807C4.98712 5.2631 5.15669 5.33334 5.3335 5.33334C5.51031 5.33334 5.67988 5.2631 5.8049 5.13807C5.92992 5.01305 6.00016 4.84348 6.00016 4.66667V4H10.0002V4.66667C10.0002 4.84348 10.0704 5.01305 10.1954 5.13807C10.3204 5.2631 10.49 5.33334 10.6668 5.33334C10.8436 5.33334 11.0132 5.2631 11.1382 5.13807C11.2633 5.01305 11.3335 4.84348 11.3335 4.66667V4H12.6668C12.8436 4 13.0132 4.07024 13.1382 4.19526C13.2633 4.32029 13.3335 4.48986 13.3335 4.66667V6.66667Z" fill="#333333" />
                                                                    </svg>
                                                                </span>
                                                                <span className="MuiTouchRipple-root" />
                                                            </button>
                                                        </div>
                                                        <fieldset aria-hidden="true" className="jss3 MuiOutlinedInput-notchedOutline" style={{ paddingLeft: '8px' }}><legend className="jss4" style={{ width: '0.01px' }}><span>​</span></legend></fieldset>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="apply-form__control col-12 p-0"><div className="input-title">Mô tả việc làm</div><div className="MuiFormControl-root MuiTextField-root jss1 jss2"><div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-multiline MuiOutlinedInput-multiline MuiInputBase-marginDense MuiOutlinedInput-marginDense"><textarea rows={4} aria-invalid="false" autoComplete="off" id="outlined-size-small" placeholder="Nhập mô tả công việc" max={999999} min={1} className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMultiline MuiOutlinedInput-inputMultiline MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" style={{ height: '68px' }} defaultValue={""} /><textarea aria-hidden="true" className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMultiline MuiOutlinedInput-inputMultiline MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" readOnly tabIndex={-1} style={{ visibility: 'hidden', position: 'absolute', overflow: 'hidden', height: '0px', top: '0px', left: '0px', transform: 'translateZ(0px)', width: '537px' }} defaultValue={""} /><fieldset aria-hidden="true" className="jss3 MuiOutlinedInput-notchedOutline" style={{ paddingLeft: '8px' }}><legend className="jss4" style={{ width: '0.01px' }}><span>​</span></legend></fieldset></div></div></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="experience__add-btn"><span className="mr-2" style={{ height: '16px' }}><svg width="16px" height="16px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.3333 14.6666H17.3333V6.66665C17.3333 6.31302 17.1928 5.97389 16.9427 5.72384C16.6927 5.47379 16.3535 5.33331 15.9999 5.33331C15.6463 5.33331 15.3072 5.47379 15.0571 5.72384C14.8071 5.97389 14.6666 6.31302 14.6666 6.66665V14.6666H6.66659C6.31296 14.6666 5.97382 14.8071 5.72378 15.0572C5.47373 15.3072 5.33325 15.6464 5.33325 16C5.33325 16.3536 5.47373 16.6927 5.72378 16.9428C5.97382 17.1928 6.31296 17.3333 6.66659 17.3333H14.6666V25.3333C14.6666 25.6869 14.8071 26.0261 15.0571 26.2761C15.3072 26.5262 15.6463 26.6666 15.9999 26.6666C16.3535 26.6666 16.6927 26.5262 16.9427 26.2761C17.1928 26.0261 17.3333 25.6869 17.3333 25.3333V17.3333H25.3333C25.6869 17.3333 26.026 17.1928 26.2761 16.9428C26.5261 16.6927 26.6666 16.3536 26.6666 16C26.6666 15.6464 26.5261 15.3072 26.2761 15.0572C26.026 14.8071 25.6869 14.6666 25.3333 14.6666Z" fill="#141414" /></svg></span><span>Thêm kinh nghiệm làm việc</span></div>
                            </div>
                        </div>
                        <div className="apply-form__group-name">Nguyện vọng làm việc của bạn</div>
                        <div className="apply-form__group-body row no-gutters">
                            <div className="apply-form__group-title--required">Thu nhập mong muốn (VND)</div>
                            <div className="apply-form__control col-12 p-0  mt-0">
                                <div className="MuiFormControl-root MuiTextField-root jss1 jss2">
                                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense"><input aria-invalid="false" autoComplete="off" id="outlined-size-small" placeholder="Nhập thu nhập mong muốn" rows={1} type="string" max={999999} min={1} className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" defaultValue /><fieldset aria-hidden="true" className="jss3 MuiOutlinedInput-notchedOutline" style={{ paddingLeft: '8px' }}><legend className="jss4" style={{ width: '0.01px' }}><span>​</span></legend></fieldset></div>
                                </div>
                            </div>
                            <div className="apply-form__group-title">Địa điểm làm việc mong muốn</div>
                            <div className="apply-form__control col-12 p-0  mt-0">
                                <div className="input-title--required">Tỉnh/thành phố mong muốn làm việc</div>
                                <div className="MuiAutocomplete-root jss17 MuiAutocomplete-hasPopupIcon" aria-expanded="false">
                                    <div className="MuiFormControl-root MuiTextField-root jss16 MuiFormControl-fullWidth">
                                        <div className="MuiInputBase-root MuiOutlinedInput-root MuiAutocomplete-inputRoot MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd MuiInputBase-marginDense MuiOutlinedInput-marginDense">
                                            <input aria-invalid="false" autoComplete="off" placeholder="Chọn tỉnh/thành phố" type="text" className="MuiInputBase-input MuiOutlinedInput-input MuiAutocomplete-input MuiAutocomplete-inputFocused MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" aria-autocomplete="list" autoCapitalize="none" spellCheck="false" defaultValue id="mui-58197" />
                                            <div className="MuiAutocomplete-endAdornment">
                                                <button className="MuiButtonBase-root MuiIconButton-root MuiAutocomplete-popupIndicator" tabIndex={-1} type="button" aria-label="Open" title="Open">
                                                    <span className="MuiIconButton-label">
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M18 9.70504L16.59 8.29504L12 12.875L7.41 8.29504L6 9.70504L12 15.705L18 9.70504Z" fill="#545454" />
                                                        </svg>
                                                    </span>
                                                    <span className="MuiTouchRipple-root" />
                                                </button>
                                            </div>
                                            <fieldset aria-hidden="true" className="jss3 MuiOutlinedInput-notchedOutline" style={{ paddingLeft: '8px' }}><legend className="jss4" style={{ width: '0.01px' }}><span>​</span></legend></fieldset>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="apply-form__control col-12 p-0">
                                <div className="input-title--required">Quận/huyện mong muốn làm việc</div>
                                <div className="MuiAutocomplete-root jss17 MuiAutocomplete-hasPopupIcon" aria-expanded="false">
                                    <div className="MuiFormControl-root MuiTextField-root jss16 MuiFormControl-fullWidth">
                                        <div className="MuiInputBase-root MuiOutlinedInput-root MuiAutocomplete-inputRoot MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd MuiInputBase-marginDense MuiOutlinedInput-marginDense">
                                            <input aria-invalid="false" autoComplete="off" placeholder="Chọn tối đa 3 quận/ huyện" type="text" className="MuiInputBase-input MuiOutlinedInput-input MuiAutocomplete-input MuiAutocomplete-inputFocused MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" aria-autocomplete="list" autoCapitalize="none" spellCheck="false" defaultValue id="mui-25906" />
                                            <div className="MuiAutocomplete-endAdornment">
                                                <button className="MuiButtonBase-root MuiIconButton-root MuiAutocomplete-popupIndicator" tabIndex={-1} type="button" aria-label="Open" title="Open">
                                                    <span className="MuiIconButton-label">
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M18 9.70504L16.59 8.29504L12 12.875L7.41 8.29504L6 9.70504L12 15.705L18 9.70504Z" fill="#545454" />
                                                        </svg>
                                                    </span>
                                                    <span className="MuiTouchRipple-root" />
                                                </button>
                                            </div>
                                            <fieldset aria-hidden="true" className="jss3 MuiOutlinedInput-notchedOutline" style={{ paddingLeft: '8px' }}><legend className="jss4" style={{ width: '0.01px' }}><span>​</span></legend></fieldset>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="apply-form__group-title">Thời gian làm việc mong muốn</div>
                            <div className="apply-form__control col-12 col-lg-6 p-0 pr-12px pr-mb-0 mt-0">
                                <div className="input-title--required">Khung thời gian</div>
                                <div className="MuiFormControl-root MuiTextField-root jss1 jss2">
                                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense"><input aria-invalid="false" autoComplete="off" id="outlined-size-small" placeholder="Nhập khung thời gian" rows={1} type="string" max={999999} min={1} className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" defaultValue /><fieldset aria-hidden="true" className="jss3 MuiOutlinedInput-notchedOutline" style={{ paddingLeft: '8px' }}><legend className="jss4" style={{ width: '0.01px' }}><span>​</span></legend></fieldset></div>
                                </div>
                                <div className="apply-form__input-note">Vui lòng nhập các khung thời gian bạn mong muốn làm việc. Ví dụ: <span className="apply-form__input-note--bold">7h-12h, 12h-17h, 18h-22h, 9h-14h</span></div>
                            </div>
                            <div className="apply-form__control col-12 col-lg-6 p-0 pl-custom-12px pl-mb-0 mt-0 mt-mb-16px">
                                <div className="input-title--required">Ngày trong tuần</div>
                                <div className="MuiAutocomplete-root jss17 MuiAutocomplete-hasPopupIcon" aria-expanded="false">
                                    <div className="MuiFormControl-root MuiTextField-root jss16 MuiFormControl-fullWidth">
                                        <div className="MuiInputBase-root MuiOutlinedInput-root MuiAutocomplete-inputRoot MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd MuiInputBase-marginDense MuiOutlinedInput-marginDense">
                                            <input aria-invalid="false" autoComplete="off" placeholder="Chọn ngày trong tuần" type="text" className="MuiInputBase-input MuiOutlinedInput-input MuiAutocomplete-input MuiAutocomplete-inputFocused MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" aria-autocomplete="list" autoCapitalize="none" spellCheck="false" defaultValue id="mui-91047" />
                                            <div className="MuiAutocomplete-endAdornment">
                                                <button className="MuiButtonBase-root MuiIconButton-root MuiAutocomplete-popupIndicator" tabIndex={-1} type="button" aria-label="Open" title="Open">
                                                    <span className="MuiIconButton-label">
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M18 9.70504L16.59 8.29504L12 12.875L7.41 8.29504L6 9.70504L12 15.705L18 9.70504Z" fill="#545454" />
                                                        </svg>
                                                    </span>
                                                    <span className="MuiTouchRipple-root" />
                                                </button>
                                            </div>
                                            <fieldset aria-hidden="true" className="jss3 MuiOutlinedInput-notchedOutline" style={{ paddingLeft: '8px' }}><legend className="jss4" style={{ width: '0.01px' }}><span>​</span></legend></fieldset>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="apply-form__control col-12 p-0">
                                <div className="input-big-title--required">Hình thức làm việc</div>
                                <div className="MuiAutocomplete-root jss17 MuiAutocomplete-hasPopupIcon" aria-expanded="false">
                                    <div className="MuiFormControl-root MuiTextField-root jss16 MuiFormControl-fullWidth">
                                        <div className="MuiInputBase-root MuiOutlinedInput-root MuiAutocomplete-inputRoot MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd MuiInputBase-marginDense MuiOutlinedInput-marginDense">
                                            <input aria-invalid="false" autoComplete="off" placeholder="Chọn hình thức làm việc" type="text" className="MuiInputBase-input MuiOutlinedInput-input MuiAutocomplete-input MuiAutocomplete-inputFocused MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" aria-autocomplete="list" autoCapitalize="none" spellCheck="false" defaultValue id="mui-45846" />
                                            <div className="MuiAutocomplete-endAdornment">
                                                <button className="MuiButtonBase-root MuiIconButton-root MuiAutocomplete-popupIndicator" tabIndex={-1} type="button" aria-label="Open" title="Open">
                                                    <span className="MuiIconButton-label">
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M18 9.70504L16.59 8.29504L12 12.875L7.41 8.29504L6 9.70504L12 15.705L18 9.70504Z" fill="#545454" />
                                                        </svg>
                                                    </span>
                                                    <span className="MuiTouchRipple-root" />
                                                </button>
                                            </div>
                                            <fieldset aria-hidden="true" className="jss3 MuiOutlinedInput-notchedOutline" style={{ paddingLeft: '8px' }}><legend className="jss4" style={{ width: '0.01px' }}><span>​</span></legend></fieldset>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="apply-form__control col-12 p-0 ">
                                <div className="input-big-title">Bạn có sẵn sàng làm việc xoay ca không? (Ca sáng, ca tối)</div>
                                <div className="row no-gutters">
                                    <div className="col-6 p-0 pr-4px">
                                        <div className="custom-radio__container "><label className="MuiFormControlLabel-root"><span className="MuiButtonBase-root MuiIconButton-root jss12 MuiRadio-root MuiRadio-colorSecondary jss9 MuiIconButton-colorSecondary" aria-disabled="false"><span className="MuiIconButton-label"><input className="jss15" name="radio-button-demo" type="radio" defaultValue="true" /><span className="jss10" /></span><span className="MuiTouchRipple-root" /></span><span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Có</span></label></div>
                                    </div>
                                    <div className="col-6 p-0 pl-4px">
                                        <div className="custom-radio__container custom-radio__container--active"><label className="MuiFormControlLabel-root"><span className="MuiButtonBase-root MuiIconButton-root jss12 MuiRadio-root MuiRadio-colorSecondary jss9 jss13 Mui-checked MuiIconButton-colorSecondary" aria-disabled="false"><span className="MuiIconButton-label"><input className="jss15" name="radio-button-demo" type="radio" defaultValue="false" defaultChecked /><span className="jss10 jss11" /></span><span className="MuiTouchRipple-root" /></span><span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Không</span></label></div>
                                    </div>
                                </div>
                            </div>
                            <div className="apply-form__control col-12 p-0 ">
                                <div className="input-big-title">Bạn có thể làm việc vào các ngày Lễ/Tết không?</div>
                                <div className="row no-gutters">
                                    <div className="col-6 p-0 pr-4px">
                                        <div className="custom-radio__container "><label className="MuiFormControlLabel-root"><span className="MuiButtonBase-root MuiIconButton-root jss12 MuiRadio-root MuiRadio-colorSecondary jss9 MuiIconButton-colorSecondary" aria-disabled="false"><span className="MuiIconButton-label"><input className="jss15" name="radio-button-demo" type="radio" defaultValue="true" /><span className="jss10" /></span><span className="MuiTouchRipple-root" /></span><span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Có</span></label></div>
                                    </div>
                                    <div className="col-6 p-0 pl-4px">
                                        <div className="custom-radio__container custom-radio__container--active"><label className="MuiFormControlLabel-root"><span className="MuiButtonBase-root MuiIconButton-root jss12 MuiRadio-root MuiRadio-colorSecondary jss9 jss13 Mui-checked MuiIconButton-colorSecondary" aria-disabled="false"><span className="MuiIconButton-label"><input className="jss15" name="radio-button-demo" type="radio" defaultValue="false" defaultChecked /><span className="jss10 jss11" /></span><span className="MuiTouchRipple-root" /></span><span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Không</span></label></div>
                                    </div>
                                </div>
                            </div>
                            <div className="apply-form__control col-12 p-0 ">
                                <div className="input-big-title">Bạn có sẵn sàng làm việc cuối tuần không?</div>
                                <div className="row no-gutters">
                                    <div className="col-6 p-0 pr-4px">
                                        <div className="custom-radio__container "><label className="MuiFormControlLabel-root"><span className="MuiButtonBase-root MuiIconButton-root jss12 MuiRadio-root MuiRadio-colorSecondary jss9 MuiIconButton-colorSecondary" aria-disabled="false"><span className="MuiIconButton-label"><input className="jss15" name="radio-button-demo" type="radio" defaultValue="true" /><span className="jss10" /></span><span className="MuiTouchRipple-root" /></span><span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Có</span></label></div>
                                    </div>
                                    <div className="col-6 p-0 pl-4px">
                                        <div className="custom-radio__container custom-radio__container--active"><label className="MuiFormControlLabel-root"><span className="MuiButtonBase-root MuiIconButton-root jss12 MuiRadio-root MuiRadio-colorSecondary jss9 jss13 Mui-checked MuiIconButton-colorSecondary" aria-disabled="false"><span className="MuiIconButton-label"><input className="jss15" name="radio-button-demo" type="radio" defaultValue="false" defaultChecked /><span className="jss10 jss11" /></span><span className="MuiTouchRipple-root" /></span><span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Không</span></label></div>
                                    </div>
                                </div>
                            </div>
                            <div className="apply-form__control col-12 p-0 ">
                                <div className="input-big-title">Bạn có sẵn sàng làm việc ca tối không?</div>
                                <div className="row no-gutters">
                                    <div className="col-6 p-0 pr-4px">
                                        <div className="custom-radio__container "><label className="MuiFormControlLabel-root"><span className="MuiButtonBase-root MuiIconButton-root jss12 MuiRadio-root MuiRadio-colorSecondary jss9 MuiIconButton-colorSecondary" aria-disabled="false"><span className="MuiIconButton-label"><input className="jss15" name="radio-button-demo" type="radio" defaultValue="true" /><span className="jss10" /></span><span className="MuiTouchRipple-root" /></span><span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Có</span></label></div>
                                    </div>
                                    <div className="col-6 p-0 pl-4px">
                                        <div className="custom-radio__container custom-radio__container--active"><label className="MuiFormControlLabel-root"><span className="MuiButtonBase-root MuiIconButton-root jss12 MuiRadio-root MuiRadio-colorSecondary jss9 jss13 Mui-checked MuiIconButton-colorSecondary" aria-disabled="false"><span className="MuiIconButton-label"><input className="jss15" name="radio-button-demo" type="radio" defaultValue="false" defaultChecked /><span className="jss10 jss11" /></span><span className="MuiTouchRipple-root" /></span><span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Không</span></label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="apply-form__btn-submit-container">
                            <div className="apply-form__btn-submit-wrapper"><button className="MuiButtonBase-root MuiButton-root MuiButton-contained apply-form__btn-submit MuiButton-containedPrimary" tabIndex={0} type="button"><span className="MuiButton-label">Nộp hồ sơ</span><span className="MuiTouchRipple-root" /></button></div>
                        </div>
                    </div>
                </div>
                <div className="apply-form__apply-container">
                    <div className="apply-form__apply-wapper">
                        <div className="job-detail__name-apply">TIẾP ĐÓN KHÁCH HÀNG (BẢO VỆ)</div>
                        <div className="apply-form__apply-info">
                            <span className="mr-2">
                                <svg width="16px" height="16px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.33326 6.99988H7.99992C8.17673 6.99988 8.3463 6.92965 8.47133 6.80462C8.59635 6.6796 8.66659 6.51003 8.66659 6.33322C8.66659 6.1564 8.59635 5.98684 8.47133 5.86181C8.3463 5.73679 8.17673 5.66655 7.99992 5.66655H7.33326V5.33322C7.33326 5.15641 7.26302 4.98684 7.13799 4.86181C7.01297 4.73679 6.8434 4.66655 6.66659 4.66655C6.48978 4.66655 6.32021 4.73679 6.19519 4.86181C6.07016 4.98684 5.99992 5.15641 5.99992 5.33322V5.69988C5.59487 5.78213 5.23483 6.01195 4.98969 6.34473C4.74456 6.6775 4.63182 7.08949 4.67335 7.50072C4.71489 7.91194 4.90775 8.29306 5.21448 8.57009C5.52121 8.84712 5.91994 9.0003 6.33326 8.99988H6.99992C7.08833 8.99988 7.17311 9.035 7.23563 9.09751C7.29814 9.16003 7.33326 9.24481 7.33326 9.33322C7.33326 9.42162 7.29814 9.50641 7.23563 9.56892C7.17311 9.63143 7.08833 9.66655 6.99992 9.66655H5.33326C5.15645 9.66655 4.98688 9.73679 4.86185 9.86181C4.73683 9.98684 4.66659 10.1564 4.66659 10.3332C4.66659 10.51 4.73683 10.6796 4.86185 10.8046C4.98688 10.9296 5.15645 10.9999 5.33326 10.9999H5.99992V11.3332C5.99992 11.51 6.07016 11.6796 6.19519 11.8046C6.32021 11.9296 6.48978 11.9999 6.66659 11.9999C6.8434 11.9999 7.01297 11.9296 7.13799 11.8046C7.26302 11.6796 7.33326 11.51 7.33326 11.3332V10.9666C7.73831 10.8843 8.09835 10.6545 8.34349 10.3217C8.58862 9.98893 8.70136 9.57694 8.65983 9.16572C8.61829 8.75449 8.42543 8.37337 8.1187 8.09634C7.81197 7.81931 7.41324 7.66613 6.99992 7.66655H6.33326C6.24485 7.66655 6.16007 7.63143 6.09755 7.56892C6.03504 7.50641 5.99992 7.42162 5.99992 7.33322C5.99992 7.24481 6.03504 7.16003 6.09755 7.09751C6.16007 7.035 6.24485 6.99988 6.33326 6.99988ZM13.9999 7.99988H11.9999V1.99988C12.0004 1.88241 11.9698 1.7669 11.9113 1.66505C11.8527 1.56319 11.7683 1.47862 11.6666 1.41988C11.5652 1.36137 11.4503 1.33057 11.3333 1.33057C11.2162 1.33057 11.1013 1.36137 10.9999 1.41988L8.99992 2.56655L6.99992 1.41988C6.89858 1.36137 6.78361 1.33057 6.66659 1.33057C6.54957 1.33057 6.4346 1.36137 6.33326 1.41988L4.33326 2.56655L2.33326 1.41988C2.23191 1.36137 2.11695 1.33057 1.99992 1.33057C1.8829 1.33057 1.76794 1.36137 1.66659 1.41988C1.56485 1.47862 1.48044 1.56319 1.42191 1.66505C1.36337 1.7669 1.33279 1.88241 1.33326 1.99988V12.6665C1.33326 13.197 1.54397 13.7057 1.91904 14.0808C2.29412 14.4558 2.80282 14.6665 3.33326 14.6665H12.6666C13.197 14.6665 13.7057 14.4558 14.0808 14.0808C14.4559 13.7057 14.6666 13.197 14.6666 12.6665V8.66655C14.6666 8.48974 14.5964 8.32017 14.4713 8.19515C14.3463 8.07012 14.1767 7.99988 13.9999 7.99988ZM3.33326 13.3332C3.15645 13.3332 2.98688 13.263 2.86185 13.138C2.73683 13.0129 2.66659 12.8434 2.66659 12.6665V3.15322L3.99992 3.91322C4.10282 3.96696 4.21718 3.99502 4.33326 3.99502C4.44934 3.99502 4.5637 3.96696 4.66659 3.91322L6.66659 2.76655L8.66659 3.91322C8.76948 3.96696 8.88384 3.99502 8.99992 3.99502C9.116 3.99502 9.23036 3.96696 9.33326 3.91322L10.6666 3.15322V12.6665C10.6684 12.894 10.709 13.1194 10.7866 13.3332H3.33326ZM13.3333 12.6665C13.3333 12.8434 13.263 13.0129 13.138 13.138C13.013 13.263 12.8434 13.3332 12.6666 13.3332C12.4898 13.3332 12.3202 13.263 12.1952 13.138C12.0702 13.0129 11.9999 12.8434 11.9999 12.6665V9.33322H13.3333V12.6665Z" fill="#30C894" />
                                </svg>
                            </span>
                            <span>7,000,000-9,000,000</span>
                        </div>
                        <div className="apply-form__apply-info">
                            <span className="mr-2">
                                <svg width="16px" height="16px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.0001 2.98644C10.9392 1.92558 9.50041 1.32959 8.00012 1.32959C6.49982 1.32959 5.06098 1.92558 4.00012 2.98644C2.93925 4.04731 2.34326 5.48615 2.34326 6.98644C2.34326 8.48673 2.93925 9.92558 4.00012 10.9864L7.51345 14.5064C7.57542 14.5689 7.64916 14.6185 7.7304 14.6524C7.81164 14.6862 7.89877 14.7036 7.98678 14.7036C8.07479 14.7036 8.16193 14.6862 8.24317 14.6524C8.32441 14.6185 8.39814 14.5689 8.46011 14.5064L12.0001 10.9531C13.0565 9.89666 13.65 8.46381 13.65 6.96978C13.65 5.47574 13.0565 4.0429 12.0001 2.98644ZM11.0468 9.99978L8.00012 13.0598L4.95345 9.99978C4.35155 9.39732 3.94177 8.62994 3.77591 7.79464C3.61006 6.95933 3.69557 6.09361 4.02165 5.3069C4.34773 4.52019 4.89973 3.84781 5.60787 3.37476C6.31601 2.90171 7.14851 2.64923 8.00012 2.64923C8.85173 2.64923 9.68422 2.90171 10.3924 3.37476C11.1005 3.84781 11.6525 4.52019 11.9786 5.3069C12.3047 6.09361 12.3902 6.95933 12.2243 7.79464C12.0585 8.62994 11.6487 9.39732 11.0468 9.99978ZM6.00012 4.93978C5.46193 5.47963 5.15971 6.21082 5.15971 6.97311C5.15971 7.7354 5.46193 8.4666 6.00012 9.00644C6.39996 9.40697 6.90917 9.6805 7.46388 9.79271C8.01859 9.90493 8.59408 9.85083 9.11816 9.63721C9.64224 9.42359 10.0916 9.05996 10.4098 8.59194C10.728 8.12392 10.9009 7.57236 10.9068 7.00644C10.9098 6.62858 10.837 6.25395 10.6927 5.9047C10.5484 5.55546 10.3356 5.23868 10.0668 4.97311C9.80256 4.70283 9.4875 4.48747 9.13973 4.33942C8.79196 4.19137 8.41834 4.11356 8.04038 4.11046C7.66242 4.10736 7.28758 4.17904 6.93743 4.32137C6.58728 4.4637 6.26873 4.67386 6.00012 4.93978ZM9.12678 8.05978C8.87414 8.31627 8.54026 8.47705 8.1822 8.51461C7.82414 8.55218 7.46416 8.4642 7.16379 8.26573C6.86342 8.06725 6.64131 7.77061 6.53545 7.4265C6.42959 7.08239 6.44655 6.7122 6.58342 6.37921C6.72029 6.04623 6.96858 5.77112 7.28584 5.60093C7.6031 5.43075 7.96962 5.37605 8.32274 5.44619C8.67586 5.51633 8.99366 5.70695 9.22179 5.98546C9.44992 6.26398 9.57423 6.61309 9.57345 6.97311C9.56375 7.38462 9.39111 7.77546 9.09345 8.05978H9.12678Z" fill="#333333" />
                                </svg>
                            </span>
                            <span>
                                <p><b>Thành phố Hồ Chí Minh</b> (Quận 1, Quận Tân Bình, Quận 3, Quận 10, Quận 7)</p>
                            </span>
                        </div>
                        <div className="apply-form__apply-info">
                            <span className="mr-2">
                                <svg width="16px" height="16px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.6668 2.66667H11.3335V2C11.3335 1.82319 11.2633 1.65362 11.1382 1.5286C11.0132 1.40357 10.8436 1.33334 10.6668 1.33334C10.49 1.33334 10.3204 1.40357 10.1954 1.5286C10.0704 1.65362 10.0002 1.82319 10.0002 2V2.66667H6.00016V2C6.00016 1.82319 5.92992 1.65362 5.8049 1.5286C5.67988 1.40357 5.51031 1.33334 5.3335 1.33334C5.15669 1.33334 4.98712 1.40357 4.86209 1.5286C4.73707 1.65362 4.66683 1.82319 4.66683 2V2.66667H3.3335C2.80306 2.66667 2.29436 2.87738 1.91928 3.25246C1.54421 3.62753 1.3335 4.13624 1.3335 4.66667V12.6667C1.3335 13.1971 1.54421 13.7058 1.91928 14.0809C2.29436 14.456 2.80306 14.6667 3.3335 14.6667H12.6668C13.1973 14.6667 13.706 14.456 14.081 14.0809C14.4561 13.7058 14.6668 13.1971 14.6668 12.6667V4.66667C14.6668 4.13624 14.4561 3.62753 14.081 3.25246C13.706 2.87738 13.1973 2.66667 12.6668 2.66667ZM13.3335 12.6667C13.3335 12.8435 13.2633 13.0131 13.1382 13.1381C13.0132 13.2631 12.8436 13.3333 12.6668 13.3333H3.3335C3.15669 13.3333 2.98712 13.2631 2.86209 13.1381C2.73707 13.0131 2.66683 12.8435 2.66683 12.6667V8H13.3335V12.6667ZM13.3335 6.66667H2.66683V4.66667C2.66683 4.48986 2.73707 4.32029 2.86209 4.19526C2.98712 4.07024 3.15669 4 3.3335 4H4.66683V4.66667C4.66683 4.84348 4.73707 5.01305 4.86209 5.13807C4.98712 5.2631 5.15669 5.33334 5.3335 5.33334C5.51031 5.33334 5.67988 5.2631 5.8049 5.13807C5.92992 5.01305 6.00016 4.84348 6.00016 4.66667V4H10.0002V4.66667C10.0002 4.84348 10.0704 5.01305 10.1954 5.13807C10.3204 5.2631 10.49 5.33334 10.6668 5.33334C10.8436 5.33334 11.0132 5.2631 11.1382 5.13807C11.2633 5.01305 11.3335 4.84348 11.3335 4.66667V4H12.6668C12.8436 4 13.0132 4.07024 13.1382 4.19526C13.2633 4.32029 13.3335 4.48986 13.3335 4.66667V6.66667Z" fill="#333333" />
                                </svg>
                            </span>
                            <span>Hạn nộp 30/09/2024</span>
                        </div>
                        <div className="apply-form__btn-apply"  onClick={() => navigate('/chi-tiet-viec-lam-cua-hang')}>Xem chi tiết công việc</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ungtuyen;
