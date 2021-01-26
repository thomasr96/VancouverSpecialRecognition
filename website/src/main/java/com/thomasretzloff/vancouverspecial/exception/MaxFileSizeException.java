// MaxUploadSizeExceededExceptionpackage com.thomasretzloff.vancouverspecial.exception;
package com.thomasretzloff.vancouverspecial.exception;
 
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
 
@ResponseStatus(HttpStatus.BAD_REQUEST)
public class MaxFileSizeException extends RuntimeException 
{
    public MaxFileSizeException(String exception) {
        super(exception);
    }
}