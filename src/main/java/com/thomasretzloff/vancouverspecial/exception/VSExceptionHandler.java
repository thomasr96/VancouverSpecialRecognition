package com.thomasretzloff.vancouverspecial.exception;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.multipart.MaxUploadSizeExceededException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
 
@SuppressWarnings({"unchecked","rawtypes"})
@ControllerAdvice
public class VSExceptionHandler extends ResponseEntityExceptionHandler 
{
//     spring.servlet.multipart.max-file-size=500KB
// spring.servlet.multipart.max-request-size=500KB

    @Value("${spring.servlet.multipart.max-file-size}")
    private String maxUploadFileSize;

    @ExceptionHandler(Exception.class)
    public final ResponseEntity<Object> hhandleAllExceptions(Exception ex, WebRequest request) {
        List<String> details = new ArrayList<>();
        details.add(ex.getLocalizedMessage());
        ErrorResponse error = new ErrorResponse("dormbond", details);
        return new ResponseEntity(error, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(MaxUploadSizeExceededException .class)
    public final ResponseEntity<String> handleMaxFileUploadSize(MaxUploadSizeExceededException ex, WebRequest request) {
        List<String> details = new ArrayList<>();
        details.add(ex.getLocalizedMessage());
        ErrorResponse error = new ErrorResponse("gormod", details);
        System.out.println("gobldod");
        System.out.println(this.maxUploadFileSize);
        System.out.println(ex.getLocalizedMessage());
        String message = "Max file size is " + this.maxUploadFileSize;
        return new ResponseEntity(message, HttpStatus.BAD_REQUEST);
    }
 
    // @Override
    // protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
    //     List<String> details = new ArrayList<>();
    //     for(ObjectError error : ex.getBindingResult().getAllErrors()) {
    //         details.add(error.getDefaultMessage());
    //     }
    //     ErrorResponse error = new ErrorResponse("Validation Failed", details);
    //     return new ResponseEntity(error, HttpStatus.BAD_REQUEST);
    // }
}