package com.shopping.shoppingbackend.Controller;

import com.shopping.shoppingbackend.Entity.Item;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping(path = "/items")
public class ItemController {

    @PostMapping(value = "/total")
    public ResponseEntity<HashMap<String, Object>> getItemsTotalPrice(@RequestBody List<Item> items) {
        // Provides the total for each unique item id,
        // and the grant total of all items.
        List<Item> groupedItemsList = new ArrayList<>();
        HashMap<String, Item> groupedItems = new HashMap<>();
        double grandTotal = 0.0;

        for (Item item: items) {
            String id = item.get_id();

            // Create new entries for each unique id.
            if (!groupedItems.containsKey(id)) {
                item.setTotalItemCount(0);
                item.setTotalPrice(0.0);
                groupedItems.put(id, item);
            } else {
                item = groupedItems.get(id);
            }

            // Aggregate the count and price under each unique id.
            item.setTotalItemCount(item.getTotalItemCount() + 1);
            item.setDiscountedPrice(item.getPrice() * ((100 - item.getDiscount()) / 100));
            item.setTotalPrice(item.getTotalPrice() + item.getDiscountedPrice());
            groupedItems.put(id, item);

            // Grand total.
            grandTotal += item.getDiscountedPrice();
        }

        // Put grouped items into a list.
        // Here, there's only one object for each unique id.
        for (Map.Entry groupedItem: groupedItems.entrySet()) {
            groupedItemsList.add((Item)groupedItem.getValue());
        }

        // Response.
        HashMap<String, Object> response = new HashMap<>();
        response.put("GroupedItems", groupedItemsList);
        response.put("GrandTotal", grandTotal);
        return new ResponseEntity<HashMap<String, Object>>(response, HttpStatus.OK);
    }
}
