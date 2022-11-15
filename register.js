
import { register } from "./php/register.php";

$(document).ready(function () {
    $("form").submit(function (event) {
        $(".form-group").removeClass("has-error");
        $(".help-block").remove();
      var formData = {
        name: $("#name").val(),
        lastname: $("#last name").val(),
        email: $("#email").val(),
        password: $("#password").val(),
        dob: $("#dob").val(),
        age: $("#age").val(),
        phno: $("#phno").val(),
      };
  
      $.ajax({
        type: "POST",
        url: "/php/register.php",
        data: formData,
        dataType: "json",
        encode: true,
      }).done(function (data) {
        console.log(data);

        if (!data.success) {
        if (data.errors.name) {
          $("#name-group").addClass("has-error");
          $("#name-group").append(
            '<div class="help-block">' + data.errors.name + "</div>"
          );
        }

        if (data.errors.lastname) {
          $("#email-group").addClass("has-error");
          $("#email-group").append(
            '<div class="help-block">' + data.errors.lastname + "</div>"
          );
        }

        if (data.errors.email) {
            $("#email-group").addClass("has-error");
            $("#email-group").append(
              '<div class="help-block">' + data.errors.email + "</div>"
            );
          }

          if (data.errors.password) {
            $("#email-group").addClass("has-error");
            $("#email-group").append(
              '<div class="help-block">' + data.errors.password + "</div>"
            );
          }

          if (data.errors.dob) {
            $("#email-group").addClass("has-error");
            $("#email-group").append(
              '<div class="help-block">' + data.errors.dob + "</div>"
            );
          }

          if (data.errors.age) {
            $("#email-group").addClass("has-error");
            $("#email-group").append(
              '<div class="help-block">' + data.errors.age + "</div>"
            );
          }

        if (data.errors.phno) {
          $("#superhero-group").addClass("has-error");
          $("#superhero-group").append(
            '<div class="help-block">' + data.errors.phno + "</div>"
          );
        
        }
      } else {
        $("form").html(
          '<div class="alert alert-success">' + data.message + "</div>"
        );
      }
      });
  
      event.preventDefault();
    });
  });