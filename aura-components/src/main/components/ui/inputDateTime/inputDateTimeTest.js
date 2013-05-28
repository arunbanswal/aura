/*
 * Copyright (C) 2013 salesforce.com, inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
({
    /*
     * Note: currently dateTimePicker, requires the user to manually put the time they are looking for. This test
     * is just a stub for future functionality
     */
    testInputDateTimeToday:{
	attributes : {displayDatePicker:'true', langLocale: 'en', timezone: 'GMT'},
	test: function(cmp){
	        cmp.find("datePicker").get('c.selectToday').run()
	        var inputDateStr  = cmp.find("inputText").getElement().value;
	        var dt            = moment().format('YYYY-MM-DD 00:00');
    		aura.test.assertTrue(aura.test.contains(dt, inputDateStr), "Dates are not the same and they should be");
        }
    }
})
