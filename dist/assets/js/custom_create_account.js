$(document).ready(function() {
  $(document).on("change","#user_account_type_founder",function() {
    $('.stepper-title')[2].innerHTML = "Business Details"
    $('#business_details').toggleClass("d-none")
    $('#investment_details').toggleClass("d-none")
    $("#investment_details :input").attr("disabled", true);
    $("#business_details :input").attr("disabled", false);
  });

  $(document).on("change","#user_account_type_investor",function() {
    $('.stepper-title')[2].innerHTML = "Investment Details"
    $('#business_details').toggleClass("d-none")
    $('#investment_details').toggleClass("d-none")
    $("#business_details :input").attr("disabled", true);
    $("#investment_details :input").attr("disabled", false);
  });

  $('#advanced_plan_input').click(function(e){
    var url = $("#planSubmitButton").data('url');
    $("#planSubmitButton").attr("href", url + "?plan=" + e.currentTarget.value );
  });

  $('#enterprise_plan_input').click(function(e){
    var url = $("#planSubmitButton").data('url');
    $("#planSubmitButton").attr("href", url + "?plan=" + e.currentTarget.value );
  });
});

$( document ).on('turbolinks:load ready', function() {
    setTimeout(function(){
    $('.flash').fadeOut();
    }, 5000);
  })