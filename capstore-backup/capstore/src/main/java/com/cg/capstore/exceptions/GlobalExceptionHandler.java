package com.cg.capstore.exceptions;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler({ CustomExceptions.class })
	public ResponseEntity<String> handleError(Exception ex) {
		return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_ACCEPTABLE);
	}

	@ExceptionHandler({ MethodArgumentNotValidException.class })
	public ResponseEntity<String> handleValidationErrors(MethodArgumentNotValidException ex) {
		String msg = "";
		List<FieldError> fieldErrors = ex.getBindingResult().getFieldErrors();
		for (FieldError fieldError : fieldErrors) {
			msg += fieldError.getDefaultMessage() + "\n";
		}
		return new ResponseEntity<String>(msg, HttpStatus.BAD_REQUEST);
	}
}
